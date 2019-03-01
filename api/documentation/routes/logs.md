## Logs
`/log`

**NOTE**: Dates in URL parameters are expected in the format `"MM-DD-YYYY"`. When passing dates, the API will return data for the week or month that the specified date is a part of... e.g. if you pass the date February 30th which is a Wednesday, you'll recieve data for the week of February 28th (that Monday), or for the month of February depending on which route you call. If you don't pass a date to a route with an optional date parameter, the default value is the current date. 

<div class="divider"></div>

#### `GET /athlete/:id/week/:date?` + 
Get a week of data for an athlete

**Parameters:**
``` 
id: Athlete ID for user who's data you want
date: Date
```

**Returns:**
[`[Entry]`](/api/schemas#entry)

<div class="divider"></div>

#### `GET /athlete/:id/month/:date?` + 
Get a month of data for an athlete

**Parameters:**
``` 
id: Athlete ID for user who's data you want
date: Date
```

**Returns:**
[`[Entry]`](/api/schemas#entry)

<div class="divider"></div>

#### `GET /athlete/:id/:date?` + 
Get a single day's log entry for an athlete

**Parameters:**
``` 
id: Athlete ID for user who's data you want
date: Date
```

**Returns:**
[`Entry`](/api/schemas#entry)

<div class="divider"></div>

#### `GET /list/:id/week/:date?` -
Get a week of your logs

**Parameters:**
``` 
date: Date
```

**Returns:**
[`[Entry]`](/api/schemas#entry)


