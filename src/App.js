import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigator } from './features/navigator/Navigator';
import { forward } from './features/navigator/navigatorSlice';
import './App.css';

/**
 * This component determines the browser URL on initial page load
 * and sets the navigator path state
 */
function App() {
  // Get the current url from browser
  const url = new URL(window.location.href);

  // Set redux path state (with basepath)
  const dispatch = useDispatch();
  dispatch(forward(url.pathname));

  return (
    <Navigator />
  );
}

export default App;
