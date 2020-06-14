## Welcome to the RaceBase API

RaceBase was designed upon an extensible and maintanable API 
that we built from the ground up to be used by the community. 

All API access is through HTTPS, and is accessed with `https://api.racebase.io`.

Every API call will take the format

`https://api.racebase.io/ROUTE/QUERY`

where `ROUTE` is the category you'd like to query and `QUERY` is the more specific query of data you'd like. For example, 

`https://api.racebase.io/result/count` 

will return the current total number of results in our database.

All available Routes are listed on the sidebar, with their documentation available by clicking through. 

**Routes with a "+" next to them are public, and those with a "-" require authorization to access.**
