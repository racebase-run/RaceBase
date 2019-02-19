var express = require('express')
var router = express.Router()

var Race = require('../models/race')
var Result = require('../models/result')
var User = require('../models/user')

var moment = require('moment')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const multer = require("multer")
const cloudinary = require("cloudinary")
const cloudinaryStorage = require("multer-storage-cloudinary")
const uuidv1 = require('uuid/v1')
const Handlebars = require('handlebars')
const fs = require('fs')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

var authCheck = require('../auth')

var config = require('../config.js')

cloudinary.config({
  cloud_name: 'racebase',
  api_key: '517184396944314',
  api_secret: config.cloudinary_secret
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "profiles",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 450, crop: "limit" }]
})

const parser = multer({ storage: storage })

router.get('/count', async (req, res) => {
  let count = await User.find({ active: true }).count()
  res.send({ count: count })
})

router.get('/referrals', authCheck, async (req, res) => {
  let user = await User.findById(req.userId)
  let referrals = await User.find({ referrer: user.referralCode, active: true }).count()
  res.send({ referrals: referrals })
})

router.get('/claimed/:athlete_id', function(req,res) {
  User.findOne({$or: [
     { 'athlete_id' : req.params.athlete_id },
     { 'aliases': req.params.athlete_id }
    ]}, function(err, data) {
    if (err)
      res.status(500).send(err);
    else if (!data)
      res.send({ claimed: false });
    else 
      res.send({ user: data.name, claimed: true });
  });
});

router.get('/following', authCheck, async (req, res) => {
  let curUser = User.findOne({ _id: req.userId })
  if (!curUser) res.send("Error")
  else res.send(curUser.following)
})

// Route for getting public data of user based on Athlete ID
router.get('/athlete/:athlete_id', function(req, res) {
  User.findOne({ 'athlete_id' : req.params.athlete_id }, function(err, user) {
    if (err)
      res.send(err)

    else if (user) {
      user.password = null;
      user.email = null;
      res.send(user)
    }

    else 
      res.send(null)

  })
})

router.get('/:id/races/:page?/:length?', function(req, res) {
  User.findOne({ '_id' : req.params.id}).lean().exec(function(err, user) {
    if (err)
      res.send(err);
    else if (!user)
      res.send({ error : "No user with that ID exists." });
    else {
      Race.paginate({ 'user_id' : String(user._id) }, { 
        lean: true, 
        page: req.params.page || 1, 
        limit: parseInt(req.params.length) || 10
      }, (err, races) => {

        // if there's an error getting it, send it
        if (err)
          res.send(err);

        else {
          for (x in races.docs) {
            races.docs[x].date = moment(races.docs[x].date).format('MMMM D YYYY'); 
          }

          res.send(races); // return data in JSON format
        }
      });
    }
  })

});

router.get('/:id/profilePic', async (req, res) => {
  let user = await User.findOne({ athlete_id: req.params.id })
  if (!user) res.send("Athlete ID isn't claimed")
  else res.send(user.profilePicUrl)
})

router.get('/:id', authCheck, async function(req, res) {
  if (req.params.id == req.userId) {
    User.findOne({ '_id' : req.params.id }, async function(err, user) {
      if (err)
        res.send(err);
      else {
        if (!user.referralCode) {
          user.referralCode = uuidv1()
          await user.save()
        }
        res.json(user);
      }
    });
  } else {
    res.sendStatus(401)
  }

});

router.get('/:userId/isFollowing/:id', authCheck, function(req, res) {
  if (req.userId != req.params.userId) res.status(401).send('Not authorized.')
  else {
    User.findOne({ '_id' : req.userId }, function(err, user) {
      if (err) res.status(500).send('Internal server error.')
      else if (!user) res.status(404).send('User not found')
      else {
        res.status(200)
        if (user.following.includes(req.params.id)) res.send(true)
        else res.send(false)
      }
    })
  }
})

let sendVerificationEmail = async function(user, token, callback) {
  fs.readFile('./mail_templates/verify.hbs', 'utf8', (err, source) => {
    let template = Handlebars.compile(source)
    let data = { emailToken: token, firstname: user.name.split(' ')[0] }
    let content = template(data)
    const msg = {
      to: user.email,
      from: { email: 'donotreply@racebase.io', name: 'RaceBase Accounts' },
      subject: 'Verify your RaceBase account', 
      html: content
    };
    sgMail.send(msg)
    callback()
  })
}

router.post('/', async function(req, res) {
  User.findOne({ 'email' : req.body.email }, function(err, user) {
    if (user) {
      res.send({ error : "User already exists." })
    }
    else {
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);
      var emailVer = uuidv1()
      let newReferralCode = uuidv1()
      User.create({
        password: hashedPassword,
        email: req.body.email,
        name: req.body.name,
        emailVer: emailVer, 
        referrer: req.body.referralCode, 
        referralCode: newReferralCode, 
        coach: req.body.coach
      }, async function(err, user) {
        if (err)
          res.send(err);
        else {
          let emailToken = jwt.sign({ id: user._id, emailVer: emailVer }, config.secret, { expiresIn: 3600 })
          sendVerificationEmail(user, emailToken, () => {
            let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 })          
            res
              .cookie('csrf_token', token, { maxAge: 86400000, httpOnly: true })
              .status(200)
              .send({ auth: true, token: token });
          })
        }
      });
    }
  })
}); 

router.post('/forgotPassword', async (req, res) => {
  let user = await User.findOne({ email: req.body.email })
  if (!user) res.send("User does not exist!")
  let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 360 })
  let link = "https://racebase.io/user/resetPassword/" + token
  const msg = {
    to: req.body.email, 
    from: { email: 'donotreply@racebase.io', name: 'RaceBase Accounts' }, 
    subject: 'Reset your RaceBase password', 
    html: '<p> Use the link below to reset your password (expires in 10 minutes): <br> <a href="' + link + '">Reset password</a></p>'
  }
  sgMail.send(msg)
  res.send("Email sent")
})

router.post('/resetPassword/:token', async (req, res) => {
  jwt.verify(req.params.token, config.secret, async (err, decoded) => {
    if (err) res.send("Token is invalid")
    let user = await User.findById(decoded.id)
    let hashedPassword = bcrypt.hashSync(req.body.newPassword, 8)
    user.password = hashedPassword
    await user.save()
    res.send("Successfully reset password")
  })
})

router.post('/resendVerification', authCheck, async function(req, res) {
  let user = await User.findById(req.userId)
  var emailVer = uuidv1()
  user.emailVer = emailVer
  await user.save()
  let emailToken = jwt.sign({ id: req.userId, emailVer: emailVer }, config.secret, { expiresIn: 3600 })
  sendVerificationEmail(user, emailToken, () => { res.send("Verification email sent") })
})

router.post('/verify/:token', function(req, res) {
  jwt.verify(req.params.token, config.secret, async (err, decoded) => {
    if (err)
      return res.send("Failed to verify email")
    let user = await User.findById(decoded.id)
    if (!user) res.send("Failed to verify email")
    else if (decoded.emailVer == user.emailVer) {
      user.active = true
      await user.save()
      res.send("Successfully verified email")
    } else res.send("Your verification token didn't match!")
  })
})

router.post('/:id/profile_pic', parser.single("image"), authCheck, (req, res) => {
  User.findOne({ '_id' : req.params.id }, (err, user) => {
    if (err)
      res.send(err)

    else {
      const image = {};
      image.url = req.file.url;
      image.id = req.file.public_id;

      user.profilePicUrl = req.file.url; 
      user.profilePic_id = req.file.public_id;

      user.save((err, data) => {
        if (err)
          res.status(500).send(err)
        else
          res.send(data)
      })
    }
  })
})

router.post('/:id/brand_pic', parser.single("image"), authCheck, (req, res) => {
  User.findOne({ '_id' : req.params.id }, (err, user) => {
    if (err)
      res.send(err)

    else {
      const image = {};
      image.url = req.file.url;
      image.id = req.file.public_id;

      user.brandPicUrl = req.file.url; 
      user.brandPic_id = req.file.public_id;

      user.save((err, data) => {
        if (err)
          res.send(err)
        else
          res.send(data)
      })
    }
  })
})

router.post('/:id/featured_pic', parser.single("image"), authCheck, (req, res) => {
  User.findOne({ '_id' : req.params.id }, (err, user) => {
    if (err)
      res.send(err)

    else {
      const image = {};
      image.url = req.file.url;
      image.id = req.file.public_id;

      user.featuredPicUrl = req.file.url; 
      user.featuredPic_id = req.file.public_id;

      user.save((err, data) => {
        if (err)
          res.send(err)
        else
          res.send(data)
      })
    }
  })
})

router.post('/follow/:id', authCheck, async (req, res) => {
  let curUser = await User.findOne({ _id: req.userId })
  User.findOne({ 'athlete_id' : req.params.id }, function(err, data) {
    if (err) res.send(err);
    else {
      if (!data || data == null)
        res.send({ message : "No athlete with that ID exists." });
      else if (curUser.following.includes(req.params.id)) {
        res.send({ message : "You are already following this user." });
      }
      else {
        curUser.following.push(req.params.id)
        curUser.save((err, data) =>  {
          if (err) res.send(err);
          else 
            res.send({ message : "Successfully followed." });
        })
      }
    }
  }); 
})

router.post('/unfollow/:id', authCheck, async (req, res) => {
  let curUser = await User.findOne({ _id: req.userId })
  for (i in curUser.following) { 
    if (curUser.following[i] == req.params.id) {
      curUser.following.splice(i, 1); 
    }
  }
  curUser.save((err, data) => {
    if (err) res.send(err)
    else res.send("Successfully unfollowed " + req.params.id)
  })
})


router.post('/claim/:id/:athlete_id', authCheck, function(req, res) {
  if (req.params.id == req.userId) {
    User.findOne({ 'athlete_id' : req.params.athlete_id }, function(err, data) {
      if (err)
        res.send({ failure: err });
      else if (!data) {
        Result.findOne({ 'athlete_id' : req.params.athlete_id }, function(err, data) {
          if (data) {
            User.findOneAndUpdate({ '_id' : req.params.id }, { athlete_id : req.params.athlete_id }, {new:true}, function(err, response) {
              if (err)
                res.send(err);
              else
                res.send({ success: "Successfully claimed ID.", data: response });
            });
          } else {
            res.send({ failure: "That Athlete ID doesn't exist." });
          }
        });  
      } else {
        res.send({ failure: "Athlete ID already claimed." });
      }
    });
  } else { res.send({ failure: "Unauthorized." }) }
});

router.post('/unclaim/:id/:athlete_id', authCheck, function(req, res) {
  User.findOne({ 'athlete_id' : req.params.athlete_id }, function(err, data) {
    if (err)
      res.send(err);
    else if (data) {
      Result.findOne({ 'athlete_id' : req.params.athlete_id }, function(err, data) {
        if (data) {
          User.findOneAndUpdate({ '_id' : req.params.id }, { athlete_id : "" }, {new:true}, function(err, response) {
            if (err)
              res.send(err);
            res.send({ success: "Successfully unclaimed ID.", data: response });
          });
        } else {
          res.send({ failure: "That Athlete ID doesn't exist." });
        }
      });  
    } else {
      res.send({failure: "That Athlete ID wasn't claimed." });
    }
  });
});

router.post('/:id/alias/:alias', authCheck, function(req, res) {
  if (req.userId != req.params.id) {
    res.status(403).send({ failure: "Unauthorized to add alias." });
  } else {
    User.findOne({ 'athlete_id' : req.params.alias }, function(err, data) {
      if (err)
        res.send(err)
      else if (data)
        res.send({ failure: "Specified athlete ID already claimed." }); 
      else {
        Result.findOne({ 'athlete_id' : req.params.alias }, function(err, result) {
          if (err)
            res.send(err);
          else if (!result)
            res.send({ failure: "Specified athlete ID doesn't exist." });
          else {
            User.findById(req.userId, function(err, user) {
              if (user.aliases.includes(req.params.alias))
                res.send({ failure: "Alias already exists." });
              else {
                user.aliases.push(req.params.alias);
                user.save(function(err, data) {
                  if (err)
                    res.send(err)
                  else {
                    res.send({ success: 'Successfully added alias ' + req.params.alias, data: data });
                  }
                }); 
              }
            })
          }
        });
      }
    })
  }
});

router.put('/:id/email/:email', authCheck, async (req, res) => {
  if (req.userId != req.params.id) res.send("You are not logged in as the specified user.")

  let taken = await User.findOne({ email: req.params.email })
  if (taken) res.send("Email already taken!")
  else {
    let user = await User.findById(req.params.id)
    user.email = req.params.email
    user.active = false
    await user.save()
    var emailVer = uuidv1()
    let emailToken = jwt.sign({ id: user._id, emailVer: emailVer }, config.secret, { expiresIn: 3600 })
    sendVerificationEmail(user, emailToken, () => { res.send("Email updated.") })
  }  

})

router.put("/:id", authCheck, async (req, res) => {
  if (req.params.id == req.userId) {

    let params = {}

    for (let prop in req.body) {
      if (req.body[prop])
        params[prop] = req.body[prop]
    }

    User.findOneAndUpdate({ _id: req.params.id }, params, async (err, user) => {
      if (err)
        res.send(err)
      else {
        if (req.body.email && user.email != req.body.email) {
          user.active = false
          user = await user.save()
        }
        res.send(user)
      }
    })
  } else {
    res.status(403).send({ message: 'You are not logged in as the specified user.' })
  }
})

router.delete('/:id/alias/:alias', authCheck, function(req, res) {
  User.findOne({ _id : req.userId }, (err, data) => {
    if (!data.aliases.includes(req.params.alias) || req.userId != req.params.id) {
      res.status(403).send({ failure: "Not authorized to remove alias." });
    } else {
      var index = data.aliases.indexOf(req.params.alias);
      if (index <= -1) 
        res.send({ failure : "Specified alias doesn't exist." });
      else {
        data.aliases.splice(index, 1);
        data.save(function(err, data) {
          if (err)
            res.send(err)
          else {
            res.send({ success: 'Successfully removed alias ' + req.params.alias, data: data});
          }
        }); 
      }
    }
  })
});

router.delete('/:_id', authCheck, function(req, res) {

  if (req.userId == req.params._id) {

    User.remove({ _id : req.params._id }, function(err, user) {
      if (err)
        res.send(err);
      else 
        res.send("Successfully deleted.");
    });

  } else {
    res.status(403).send("You are not authorized to delete this user.");
  }
});

module.exports = router; 

