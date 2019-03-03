## Docs
`/docs`

For getting RaceBase docs (these pages) through the API. Kinda meta, huh? On the backend, all of the docs are Markdown files. These API routes send back the MD files converted to HTML for display... these routes are in action on this very page.

<div class="divider"></div>

#### `GET /routes/:url` +
Get documentation for a route of the API

**Parameters:**
```
url: URL of doc file to grab
```

**Returns:**
```
{ 
  content: HTML documentation page
  data: YML frontmatter parsed from MD file
}
```

<div class="divider"></div>

#### `GET /:url` +
Get documentation for the API (e.g. homepage or schemas page)

**Parameters:**
```
url: URL of doc file to grab
```

**Returns:**
```
{ 
  content: HTML documentation page
  data: YML frontmatter parsed from MD file
}
```

<div class="divider"></div>

#### `GET /blog/:url` +
Get a blog post

**Parameters:**
```
url: URL of blog post to grab
```

**Returns:**
```
{ 
  content: Blog post HTML
  data: YML frontmatter parsed from MD file
}
```

<div class="divider"></div>

#### `GET /blog` +
Get a list of blog posts

**Returns:**
`[String]`


