# Schema Definitions
Below you'll find the structure of all the objects in our database. When API calls return data, its in the form of one of these models (or a subset e.g. a public User object will have email and password stripped away), or an array of these models. 

<a name="log"></a>

## Log Entry
```
Entry {
  userId: String,
  runs: [{
    distance: Number, 
    time: String, 
    elevationGain: Number, 
    difficulty: { type: Number, min: 1, max: 5 }, 
    feel: { type: Number, min: 1, max: 5 }, 
    name: String
  }],
  mileageGoal: Number,
  weights: [{
    name: String, 
    sets: Number, 
    reps: Number
  }],
  sleep: String, 
  rhr: Number, 
  weight: Number,
  checks: { type: Map, of: Boolean }, 
  note: String, 
  date: Date, 
  metricUnits: { type: Boolean, default: false }
}
```

<a name="post"></a>
## Post 
``` 
Post {
  title: String,
  body: String, 
  athlete_id: String, 
  user_id: String,
  author: String,
  date: Date, 
  likes: [String], 
  comments: [{
    body: String, 
    date: Date, 
    user: {
      name: String, 
      athlete_id: String, 
      profilePicUrl: String,
      id: String
    }
  }], 
  result_id: String, 
  photo_url: String
}); 
```
<a name="race"></a>
## Race
```
Race {
  name : String,
  location: String,
  date: Date,
  link: String,
  verified: {type : Boolean, default: false},
  user: String,
  user_id: String,
  upvotes: Number,
  downvotes: Number
}
``` 
<a name="result"></a>
## Result 
```
Result {
  time: String,
  athlete: String,
  athlete_id: String,
  verified: {type : Boolean, default: false},
  user: String,
  user_id: String,
  race: String,
  race_id: String, 
  womens: {type: Boolean, default: true},
  team: String,
  team_id: String,
  place: Number,
  event: String,
  date: Date, 
  post_id: String
}
```
<a name="team"></a>
## Team 
```
Team {
  team_id: String, // human readable identifier 
  join_code: String, // generated UUID to give to athletes to join team
  coach: String, // coach's _id
  roster: [String], // array of current athlete's athlete IDs
  name: String, // team name
  schedule: [{
    name: String, 
    location: String, 
    date: Date
  }]
})
```

<a name="user"></a>
## User
```
User {
  name: String
  email: String,
  password: String,
  athlete_id: String,
  aliases: [String], 
  following: [String],
  followers: [String],
  stravaUrl: String,
  trainer: String, 
  racer: String,
  location: String,
  mileage: String,
  profilePicUrl: String,
  profilePic_id: String,
  brandPicUrl: String,
  brandPic_id: String,
  featuredPicUrl: String,
  featuredPic_id: String, 
  premium: { type: Boolean, default: false }, 
  coach: { type: Boolean, default: false }, 
  referralCode: String,
  referrer: String, 
  active: String, 
  emailVer: String, 
  team_id: String, 
  publicLogs: { type: Boolean, default: false }
}
```

<a name="vote"></a>
## Vote
```
Vote {
  up: {type : Boolean, default: true},
  user_id: String,
  race_id: String
}
```