# Webbypack and friends!

We're creating a React project with Webpack from scratch. Doing one thing at a time and checking the output from Webpack without any boilerplate generators like Create React App. Amazing!

## Description of commits

### Initial commit [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/1cbc8e5872a01018737b932a1eb672c039a05da9)

Just git init and yarn init.

### Added gitignore and readme [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/abb3dacc20fe7988e5ca73d266c7edec000be270)

Just that ☝️

### Installed webpack [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/d16a1daabbfef579ae231d5049b23a6f8ee4f471)

- Added Webpack and webpack-cli
- Created index.js entry point
- Created greet.js module called from index.js

At this point we can run `yarn build` and Webbypack will use default its default config to create a bundle in the default output dir.

Running `yarn build` will produce a file in `/dist/main.js` which we can then run with node using `node dist/main.js`.

### Added webpack config [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/3fc21fddc0d2ea38a27a9391509b13bbaf440ae0)

Added webpack.config.js making the default config explicit.

### Added React, Babel and webpack rules for JSX and ES6 [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/58e6d66566e5f1426a7d8f5cbd141ed1c59bd128)

Added react, react-dom as dependencies.

Added Babel, Babel CLI, and other Babel plugins. Also babel-loader.

Changed `greeting.js` to be a React component and used it in `index.js` together with ReactDOM.

> How does ReactDOM know where to append the app if there's no HTML? 🤔

### Added HTMLWebpackPlugin [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/d34fe1f40f87604b5f0d5fc924b0f78e1689bf9c)

Added HTMLWebpack Plugin to help Webpack deal with HTML files. Now it actually has a root node to attach the app with using ReactDOM.
