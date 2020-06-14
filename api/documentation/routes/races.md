## Races
`/race`

<div class="divider"></div>

#### `GET /list/:page?/:length?` +
Get a paginated list of Races... sorted such that recent races are first

**Parameters:**
``` 
page: Page number to grab
length: How many races per page
```

**Returns:**
[`[Race]`](/api/schemas#race)

<div class="divider"></div>

#### `GET /list` +
Get **all Races in the database**... this is a LOT of data so be sure you want this route

**Returns:**
[`[Race]`](/api/schemas#race)

<div class="divider"></div>

#### `GET /:id` +
Get a single race by its ID

**Parameters:**
``` 
id: _id of Race
```

**Returns:**
[`Race`](/api/schemas#race)

<div class="divider"></div>

#### `GET /:id/:gender/events` +
Get a list of events for a Race and gender

**Parameters:**
``` 
id: _id of Race
gender: "mens" or "womens" // defaults to womens if it doesn't match either string
```

**Returns:**
`[String]`

<div class="divider"></div>

#### `GET /vote/:id` -
Get your vote data for a race

**Parameters:**
``` 
id: _id of Race
```

**Returns:**
[`Vote`](/api/schemas#vote)

<div class="divider"></div>

#### `POST /` -
Create a Race

**Expects:**
[`Race`](/api/schemas#race)
(accepts partial Race)

**Returns:**
[`Race`](/api/schemas#race)

<div class="divider"></div>

#### `POST /upvote/:id` -
Upvote a race

**Parameters:**
``` 
id: _id of race
```

**Returns:**
[`Race`](/api/schemas#race)

<div class="divider"></div>

#### `POST /downvote/:id` -
Downvote a race

**Parameters:**
``` 
id: _id of race
```

**Returns:**
[`Race`](/api/schemas#race)

<div class="divider"></div>

#### `PUT /` -
Update a Race

**Expects:**
[`Race`](/api/schemas#race)
(accepts partial Race)

**Returns:**
[`Race`](/api/schemas#race)

<div class="divider"></div>

#### `DELETE /:id` -
Delete a Race

**Parameters:**
``` 
id: _id of Race
```

**Returns:**
`"Successfully deleted race"`
