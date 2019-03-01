## Post / Feed
`/post`

A feed consists of both Results and Posts from athletes in the [Users'](/api/schemas#user) "following" array. 

<div class="divider"></div>

#### `GET /feed` - 
Get a list of posts and results from Athletes and Users the logged in user is following

**Returns:**
[`[Post || Result]`](/api/schemas#post)

<div class="divider"></div>

#### `GET /:id` + 
Get a specific Post by its ID

**Parameters:**
``` 
id: _id of post
```

**Returns:**
[`Post`](/api/schemas#post)

<div class="divider"></div>

#### `POST /like/:id` -
Like a specific Post

**Parameters:**
``` 
id: _id of post
```

**Returns:**
[`Post`](/api/schemas#post)

<div class="divider"></div>

#### `POST /comment/:id` -
Like a specific Post

**Parameters:**
``` 
id: _id of post
```

**Expects:**
```
{ 
  body: String // content of comment
}
```

**Returns:**
[`Post`](/api/schemas#post)

<div class="divider"></div>

#### `POST /` -
Create a new Post

**Expects:**
[`Post`](/api/schemas#post)
(accepts partial Post)

**Returns:**
[`Post`](/api/schemas#post)

<div class="divider"></div>

#### `POST /:id` -
Delete a Post

**Parameters:**
``` 
id: _id of post
```

**Returns:**
`"Successfully deleted"`
