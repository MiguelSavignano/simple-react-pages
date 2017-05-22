# React Pages
To make prototypes of different pages with a simple configuration using react

## Installation
```sh
  git clone https://github.com/MiguelSavignano/simple-react-pages
  yarn install
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

app<br />
--views<br />
----users<br />
------profile.jsx<br />
--landing.jsx<br />
public<br />
--users<br />
----profile.html<br />
--landig.html<br />

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
