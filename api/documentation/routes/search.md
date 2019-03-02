## Search
`/search`

<div class="divider"></div>

#### `GET /results/:query/:page/:length` + 
Search for a Result

**Parameters:**
``` 
query: URI encoded search query
page: Page number to grab
length: How many results per page
```

**Returns:**
[`[Result]`](/api/schemas#result)

<div class="divider"></div>

#### `GET /races/:query` + 
Search for a Race

**Parameters:**
``` 
query: URI encoded search query
```

**Returns:**
[`[Race]`](/api/schemas#race)

<div class="divider"></div>

#### `GET /races/:query` -
Search through your own Races

**Parameters:**
``` 
query: URI encoded search query
```

**Returns:**
[`[Race]`](/api/schemas#race)