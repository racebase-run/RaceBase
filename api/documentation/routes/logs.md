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

<div class="divider"></div>

#### `GET /:date?` -
Get a single entry from your logs

**Parameters:**
``` 
date: Date
```

**Returns:**
[`Entry`](/api/schemas#entry)

<div class="divider"></div>

#### `GET /streaks` -
Get a list of your streaks

**Parameters:**
``` 
date: Date
```

**Returns:**
```
{
  (key): Number // where key is the name of your checkbox
  // ...repeated for every checkbox
}
```

<div class="divider"></div>

#### `GET /avg/moving/rhr/:date?` + 
Get your moving average RHR for the 5 days preceding the date you pass

**Parameters:**
``` 
date: Date
```

**Returns:**
```
{
  avg: Number
}
```

<div class="divider"></div>

#### `GET /avg/moving/sleep/:date?` + 
Get your moving average sleep for the 5 days preceding the date you pass

**Parameters:**
``` 
date: Date
```

**Returns:**
```
{
  avg: Number
}
```

<div class="divider"></div>

#### `POST /:date/goal` -
Update the mileage goal for date in question

**Parameters:**
``` 
date: Date
```

**Expects:**
```
{ 
  goal: Number
}
```
**Returns:**
[`Entry`](/api/schemas#entry)

<div class="divider"></div>

#### `POST /:date?` -
Create or update the log entry for date in question

**Parameters:**
``` 
date: Date
```

**Expects:**
[`Entry`](/api/schemas#entry)
(accepts partial entry)

**Returns:**
[`Entry`](/api/schemas#entry)
