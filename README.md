# React Pages

# Usage
```sh
  yarn install
```
## Start the app

```sh
  npm start
```

## Add other page
To add other page you need the basic html template
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>React Page Example</title>
  </head>
  <body>
    <div id="react-page-root"></div>
  </body>
  <script src="webpack-bundle.js"></script>
</html>
```

Create a html file in public folder (you can use subfolders)

The name of the html file it's very important we need to create the same file in app views folder see example

app
--views
----users
------profile.jsx
--landing.jsx
public
--users
----profile.html
--landig.html

## Pass simple props to react page
if you need pass some simple props to the react page

```html
  <body>
    <div id="react-page-root" data-active="true"></div>
  </body>
  <script src="webpack-bundle.js"></script>
```


## custom render
If the page it's the same name with the route you can render other page like this

```html
  <body>
    <div id="react-page"></div>
  </body>
  <script src="webpack-bundle.js"></script>
  <script>
    var props = ...
    ReactPages.render('my_page', props)
  </script>
```
