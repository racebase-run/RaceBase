# RaceBase API Documentation

## Authorization `/api/auth`

### `POST /login`
- **@body** email `(string)`
- **@body** password `(string)`
- **@success** `STATUS 200 { token: (JWT), auth: true }`
- **@error** `STATUS 403 { error: ('User not found' OR 'Incorrect password') }`


## News `/api/news`

### `GET /`
Get list of all posts
- **@success** `STATUS 200 { [ list of posts ] }`
- **@error** `STATUS 503 { message: 'No files in folder.' }` 

### `GET /post/:url`
Get a specific post
- **@param** url `(string)`: path of article
- **@success** `STATUS 200 { metadata: {}, data: (HTML) }`
- **@error** `STATUS 500 { error }`


## Results `/api/result`

### `GET /count` 
Get the total number of all results in the database
- **@success** `STATUS 200 { count: (Number) }`

### `GET /teamlist/