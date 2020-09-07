import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forward, selectBasepath } from '../features/navigator/navigatorSlice';

export default function (props) {
  // Get basepath from state to prepend to links
  const basepath = useSelector(selectBasepath);
  // Prepare redux action dispatcher
  const dispatch = useDispatch();
  // Function to use React navigation instead of browser navigation.
  function handleClick(e) {
    e.preventDefault();
    dispatch(forward(props.path));
  }
  // Render link
  return (
      <a href={ basepath + props.path } onClick={handleClick} >
        { props.children }
      </a>
  );
}
