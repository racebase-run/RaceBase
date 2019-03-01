## Authorization
`/auth`

#### `GET /login` + 
**Expects:**
``` 
{ 
  username: String, 
  password: String
}
```

**Returns:**
```
{ 
  token: String, // Authorization JWT
  auth: Boolean // only true if authorization was successful, 
  error: String // only present if something went wrong
}
```