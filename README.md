React Redux Toolkit Starter App
===

# Development
## Introduction
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux Toolkit](https://redux-toolkit.js.org/) template.

React single page starter application with routing via state management.
The current URL is read from the browser and entered into redux state (navigator).
As navigation occurs in the app, the state is updated and URL updated.
[React Lazy loading of components](https://reactjs.org/docs/code-splitting.html#reactlazy) occurs when a module (js file) matching the requested path is found.
If a module cannot be found that matches the path, a [React error boundary](https://reactjs.org/docs/error-boundaries.html) is displayed.
e.g. for https://mysite.com/can/you/see/me to be displayed, create a React component in the path ```pages/can/you/see/me.js``` or ```pages/can/you/see/me/index.js```.
To create navigation links, dispatch events to the redux store:
```js
// pages/can/you/see/me.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { forward } from '../features/navigator/navigatorSlice';

export default function () {
  document.title = 'Page Title';
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => dispatch(forward('/can/you/see/me'))} >Go to: can you see me</button>
    </div>
  );
}
```

## Running Locally
To start the app on https://127.0.0.01:3000, run:
```shell
npm install
PORT=3000 HTTPS=true npm run start
```
For a list of additional environment variables, see the [advanced usage docs](https://create-react-app.dev/docs/advanced-configuration).

## Running tests
To run the interactive jest test runner with code coverage reporting:
```
npm run test --coverage
```
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building for deployment
The build process takes the React source project and produces an optimised static HTML/JS/CSS bundle in ```build``` folder, ready to be deployed:
```shell
npm run build
```
