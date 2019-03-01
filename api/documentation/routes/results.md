## Results
`/result`

<div class="divider"></div>

#### `GET /count` +
Get a current count of the number of results in the database

**Returns:**
```
{ count: Number }
```

<div class="divider"></div>

#### `GET /teamlist/:id/:gender/:event/` + 
Get a list of team scores for a specified event

**Parameters:**
``` 
id: _id of Race
gender: "mens" or "womens" // defaults to womens if it doesn't match either string
event: URI encoded string, name of event
```

**Returns:**
```
{
  team: String, 
  score: Number,
  team_id: String, 
  athletes: [Result]
}
```

<div class="divider"></div>

#### `GET /list/team/:id/:gender/years` + 
Get a list of years that a team has results for

**Parameters:**
``` 
id: human readable team_id String
gender: "mens" or "womens"
```

**Returns:**
`[Number]`

<div class="divider"></div>

#### `GET /list/team/:id/:year?/:gender?` + 
Get a list of results for a specific team, year, and gender

**Parameters:**
``` 
id: human readable team_id String
gender: "mens" or "womens"
year: Number
```

**Returns:**
[`[Result]`](/api/schemas#result)

<div class="divider"></div>

#### `GET /list/athlete/:id` + 
Get a list of results for an athlete

**Parameters:**
``` 
id: human readable athlete_id String
```

**Returns:**
[`[Result]`](/api/schemas#result)

<div class="divider"></div>

#### `GET /list/:id/:gender?/:event?` + 
Get a list of results for specified race, gender, and event

**Parameters:**
``` 
id: Race _id, 
gender: "mens" or "womens"
event: URI encoded string of event name
```

**Returns:**
[`[Result]`](/api/schemas#result)

<div class="divider"></div>

#### `GET /:id` + 
Get a single result

**Parameters:**
``` 
id: Result _id
```

**Returns:**
[`Result`](/api/schemas#result)

<div class="divider"></div>

#### `POST /` -
Create a Result

**Expects:**
[`Race`](/api/schemas#result)
(accepts partial Result)

**Returns:**
[`Result`](/api/schemas#result)

<div class="divider"></div>

#### `PUT /` -
Update a Result

**Expects:**
[`Result`](/api/schemas#result)
(accepts partial Result)

**Returns:**
[`Result`](/api/schemas#result)

<div class="divider"></div>

#### `DELETE /:id` -
Delete a Result

**Parameters:**
``` 
id: _id of Result
```

**Returns:**
`"Successfully deleted result"`


