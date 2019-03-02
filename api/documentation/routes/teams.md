## Teams
`/team`

<div class="divider"></div>

#### `GET /:id/roster` -
Get a list of all athletes on team's current roster

**Parameters:**
``` 
id: human readable team_id string
```

**Returns:**
[`[User]`](/api/schemas#user)

<div class="divider"></div>

#### `GET /:id/athlete` +
Get a list of all athletes affiliated with a team

**Parameters:**
``` 
id: human readable team_id string
```

**Returns:**
[`[ User || { athlete_id: String }]`](/api/schemas#user)

<div class="divider"></div>

#### `GET /:id` -
Get a specific Team 

**Parameters:**
``` 
id: human readable team_id string
```

**Returns:**
[`Team`](/api/schemas#team)

#### `GET /public:id` +
Get public data for specific Team

**Parameters:**
``` 
id: human readable team_id string
```

**Returns:**
[`Team`](/api/schemas#team)

<div class="divider"></div>

#### `POST /join/:code` -
Join a team

**Parameters:**
``` 
code: Join Code string
```

**Returns:**
`"Joined team"`

<div class="divider"></div>

#### `POST /schedule` -
Update or add to a team's schedule

**Expects:**
[`Team.schedule`](/api/schemas#team)

**Returns:**
[`Team`](/api/schemas#team)

<div class="divider"></div>

#### `POST /leave` -
Leave your team

**Returns:**
`"Left team"`

<div class="divider"></div>

#### `POST /claim/:id` -
Claim a team if you're a coach

**Parameters:**
``` 
id: human readable team_id string
```

**Returns:**
`"Successfully claimed team"`

<div class="divider"></div>

#### `POST /roster/athlete/:id` -
Add an athlete to your team's roster (coach only)

**Parameters:**
``` 
id: human readable athlete_id string
```

**Returns:**
`"Successfully added athlete to roster"`

<div class="divider"></div>

#### `POST /` -
Create a Team

**Expects:**
[`Team`](/api/schemas#team)
(accepts partial Team)

**Returns:**
[`Team`](/api/schemas#team)

<div class="divider"></div>

#### `PUT /` -
Update a Team

**Expects:**
[`Team`](/api/schemas#team)
(accepts partial Team)

**Returns:**
[`Team`](/api/schemas#team)

<div class="divider"></div>

#### `DELETE /roster/athlete/:id` -
Remove an athlete from the roster

**Parameters:**
``` 
id: athlete_id of athlete
```

**Returns:**
`"Successfully removed athlete from roster"`

<div class="divider"></div>

#### `DELETE /schedule/:date` -
Remove an item from your team's schedule

**Parameters:**
``` 
date: Date of item to be removed (format "DDMMYYYY")
```

**Returns:**
`"Successfully removed meet from schedule"`


