# react-jsonschema-form Electron Boilerplate


As if there's not already enough stuff in the world... here's yet another boilerplate. Sharing because I've used it a few times. This primary serves as a reference of a "simple" method of connecting a few big frameworks together: Electron, webpack/babel, and React. There are more comprehensive boilerplate projects for every purmutation of react, electron, webpack, babel, et al. This project is meant to be barebones.


### Getting Started

You know the drill: `npm i` to install everything.

The `package.json` has a few utility scripts to save you a few key strokes. `npm run go` will kick off the webpack building followed by starting the electron app.


### Here's the quick and dirty of what's going on:

We're trying to run `react-jsonschema-form` to run our JSON configuration form in an electron app. To do that, we first need to "transpile" the react JSX code found in our `index.js` entry point file into a runnable vanilla JS file (in the process, we also "transpile" ES6+ language features to an older version of the JS standard which allows use to use language features like `import`). To accomplish this, we run babel on our code using webpack. The configuration of this process is found in `webpack.config.js` and `.babelrc`. It can be run using `./node_modules/.bin/webpack --config webpack.config.js` (or with the custom `package.json` script `npm run pack`). This process generates a file called `index.bundle.js`.

Now that we have a runnable js file, we want to start an electron app that will run this file. Electron uses a `main` process that spools up `renderer` browser window processes complete with chromium, V8, and node.js. We want to run our new `index.bundle.js` script in a renderer process. The entry point into a `renderer` process is an html file (it is a webpage after all). So to instruct the `main` process to do this, we create a `main.js` file and specify `index.html` as our entry point file. In `index.html`, we place a script tag in the html file's body tag with the source attribute pointing to, you guessed it, `./index.bundle.js`. This will inject our `react-jsonschema-form` into the `renderer` process DOM and, barring any issues, display your form.

And there you have it, the watered down explanation of the overly complex chain to get you to an html form.


This boilerplate uses:
- electron
- webpack/babel
- react with JSX
- react-jsonschema-form
- bootstrap (optional dependency of react-jsonschema-form)
