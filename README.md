# Demo

## Dependencies

Run `npm install` to install all dependencies

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Run webpack for server side rendering

Run `npm build:all`, After building the application, then you can switch to the dist folder and start the server.
 `cd dist`
 `node main.server.bundle.js`
 available via `http://localhost:8000`

-- AHEAD-OF-TIME COMPILATION
  https://angular.io/docs/ts/latest/cookbook/aot-compiler.html
