# Webbypack and friends!
[@mbondyra](https://github.com/mbondyra) is helping me to learn Webpack!

We're creating a React project with Webpack from scratch. Doing one thing at a time and checking the output from Webpack without any boilerplate generators like Create React App. 

**Amazing!**

![](https://i.redd.it/74p4abo7wi721.png)

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

Added Babel, Babel CLI, and babel-loader to manage plugins. This allows for using new imports.

Changed `greeting.js` to be a React component and used it in `index.js` together with ReactDOM.

> How does ReactDOM know where to append the app if there's no HTML? 🤔
> It doesn't! At this point in time the app will crash.

### Added HTMLWebpackPlugin [↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/d34fe1f40f87604b5f0d5fc924b0f78e1689bf9c)

Added HTMLWebpack Plugin to help Webpack deal with HTML files. Now it actually has a root node to attach the app with using ReactDOM.

---

### Added dev script with watch[↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/80c06805875098951bebf92dff80bc34a0ad26a4)

Added a `dev` script with two options:

- `--watch` so that project is re-built on every file save
- `--mode development` to improve bundle file readability

### Added two separate configs for dev and prod[↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/e9d48279914b10ee38619dd745b3404dfd30596a)

Added webpack-merge to merge configs.

Then created a `base` config and two variants: `dev` and `prod`. So far the only difference is `mode:` key.

### Added webpack-dev-server[↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/263f28bc3ab7653396ac02f78cd593c44e3d5c1e)

Added webpack-dev-server to serve the app on localhost.

### Added source map[↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/263f28bc3ab7653396ac02f78cd593c44e3d5c1e)

Added source map to get the actual source code in development mode.

### Added CSS Loaders[↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/f4d182b6fa02d8fe30b424df288f13f52e1cc17d)

Added CSS file with browser styles reset and css loaders to process it.

### Added class properties plugin[↗](https://github.com/anabellaspinelli/webbypack-and-friends/commit/f6f1c3764e29f90c0c17a126a63a86e0e18a9da8)

Added class properties plugin to be able to use things like:

```js
class Component extends React.Component {
  state = {
    counter: 0,
  }
}
```

Then actually used this by changing the app to the basic react counter example.

### Hot realoading

Live reloading ==> needs refreshing the page
Hot reloading ==> updating the code in the app without updating the state
