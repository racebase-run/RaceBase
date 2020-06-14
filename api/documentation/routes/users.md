## Users
`/user`

<div class="divider"></div>

#### `GET /count` +
Get a current count of the number of **active** users in the database

**Returns:**
```
{ count: Number }
```

<div class="divider"></div>

#### `GET /referrals` -
Get number of referrals the logged in user has

**Returns:**
```
{ referrals: Number }
```

<div class="divider"></div>

#### `GET /claimed/:id` +
Check if Athlete ID is claimed; if it is, send the name of the user who claimed it

**Parameters:**
``` 
id: Athlete ID string
```

**Returns:**
```
{ 
  user: String,
  claimed: Boolean
}
```

<div class="divider"></div>

#### `GET /:id/races/:page?/:length?` +
Get a page of the list of races that a user has posted

**Parameters:**
``` 
id: Athlete ID string, 
page: which page to grab, 
length: length of page
```

**Returns:**
[`[Race]`](/api/schemas#race)

<div class="divider"></div>

#### `GET /:id/profilePic` +
Get url for profile pic of a specified athlete

**Parameters:**
``` 
id: Athlete ID string
```

**Returns:**
```
{ url: String }
```

<div class="divider"></div>

#### `GET /:userId/isFollowing/:id` -
Check if you're following an athlete ID

**Parameters:**
``` 
userId: _id of logged in user, 
id: Athlete ID you want to know if you're following or not
```

**Returns:**
`Boolean`

<div class="divider"></div>

#### `POST /` -
Create a User

**Expects:**
```
{ 
  email: String, 
  password: String, 
  coach: Boolean, 
  referralCode: String // optional
}
```

**Returns:**
```
{ 
  token: String, // Authentication JWT
  auth: Boolean // only true if authorization was successful, 
  error: String // only present if something went wrong
}
```

<div class="divider"></div>

#### `POST /forgotPassword` +
Send an email to reset your password

**Expects:**
```
{ email: String }
```

**Returns:**
`"Email sent"`

<div class="divider"></div>

#### `POST /resetPassword/:token` +
Reset your password

**Parameters:**
``` 
token: String // JWT sent in email
```

**Returns:**
`"Successfully reset password"`

<div class="divider"></div>

#### `POST /resendVerification` -
Resend verification email to logged in user

**Returns:**
`"Verification email sent"`

<div class="divider"></div>

#### `POST /verify/:token` +
Verify your email

**Parameters:**
``` 
token: String // JWT sent in email
```

**Returns:**
`"Successfully verified email"`

<div class="divider"></div>

#### `POST /:id/(profile_pic || brand_pic || featured_pic)` -
Upload a picture to your profile. Can be any of the three specified above, all routes work the same. Uses Cloudinary for image storage

**Parameters:**
``` 
id: User's _id
```

**Expects:**
``` 
{
  file: {
    url: String // Cloudinary URL
    public_id: String // Cloudinary Public ID
  }
}
```

**Returns:**
[`User`](/api/schemas#user)

<div class="divider"></div>

#### `POST /follow/:id` -
Follow an athlete

**Parameters:**
``` 
id: Athlete ID of user you want to follow
```

**Returns:**
`"Successfully followed"`

<div class="divider"></div>

#### `POST /unfollow/:id` -
Unfollow an athlete

**Parameters:**
``` 
id: Athlete ID of user you want to unfollow
```

**Returns:**
`"Successfully unfollowed"`

<div class="divider"></div>

#### `POST /claim/team/:team_id` -
Claim a team (coaches only)

**Parameters:**
``` 
team_id: Human readable team_id of team to claim
```

**Returns:**
`"Successfully claimed team"`

<div class="divider"></div>

#### `POST /unclaim/team/` -
Unclaim your team (coaches only)

**Returns:**
`"Successfully unclaimed team"`

<div class="divider"></div>

#### `POST /claim/athlete/:athlete_id` -
Claim an athlete ID

**Parameters:**
``` 
athlete_id: Human readable athlete_id of athlete to claim
```

**Returns:**
`"Successfully claimed ID"`

<div class="divider"></div>

#### `POST /unclaim/athlete` -
Unclaim an athlete ID

**Returns:**
`"Successfully unclaimed ID"`

<div class="divider"></div>

#### `POST /:id/alias/:alias` -
Add an alias to your account

**Parameters:**
``` 
id: Your user ID (yes, I know this is redundant, I'll change it soon)
alias: Human readable athlete_id of alias to add
```

**Returns:**
`"Successfully added alias ${ALIAS}"`

<div class="divider"></div>

#### `PUT /email/:email` -
Update your email

**Parameters:**
``` 
email: New email
```

**Returns:**
`"Email updated"`

<div class="divider"></div>

#### `PUT /coach` -
Change account type

**Expects:**
``` 
{ 
  coach: Boolean
}
```

**Returns:**
[`User`](/api/schemas#user)

<div class="divider"></div>

#### `PUT /:id` -
Update user

**Parameters:**
``` 
id: _id of user to update
```

**Expects:**
[`User`](/api/schemas#user)
(accepts partial User)

**Returns:**
[`User`](/api/schemas#user)

<div class="divider"></div>

#### `DELETE /:id/alias/:alias` -
Remove one of your aliases

**Parameters:**
``` 
id: Your user ID (yup, still redundant)
alias: Human readable athlete_id of alias to get rid of
```

**Returns:**
`"Successfully removed alias ${ALIAS}"`

<div class="divider"></div>

#### `DELETE /:id` -
Delete your account **(BE CAREFUL WITH THIS ONE!!)**

**Parameters:**
``` 
id: Your user ID (I swear I'm going to fix this redundancy)
```

**Returns:**
`"Successfully deleted"`

