Minimal Webpack Hot Module Reloading Implementation
===================================================

```sh-session
$ # Install dependencies
$ yarn
$ # Run hot-reloading development server with inline page reload script
$ node_modules/.bin/webpack-dev-server --inline --hot --content-base build/
```

 * Visit [http://localhost:8080/](http://localhost:8080/).
 * Change `./src/message.js`. Note how the document body is updated.
 * Change `./src/app.js`. Note how the entire page is reloaded.
 
All modules that are not accepted by `module.hot.accept` cause page reloads.
