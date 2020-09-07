import { createSlice } from '@reduxjs/toolkit';

export const navigatorSlice = createSlice({
  name: 'navigator',
  initialState: {
    basepath: (process.env.REACT_APP_BASEPATH || ''),
    path: null,
    pathComponents: []
  },
  reducers: {
    forward: (state, action) => {
      // Get basepath (if any) during build time and set to state
      const basepath = (process.env.REACT_APP_BASEPATH || '');
      state.path = String(action.payload).replace(basepath, '');

      //extract path components into array, filtering out empty elements
      state.pathComponents = String(state.path).split('/').filter(Boolean)

      // Set url in browser to the new path. Note, second param is a no-op.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      window.history.replaceState(null, '', basepath + state.path);
    }
  }
});

// Export redux actions
export const { forward } = navigatorSlice.actions;

// Export redux selectors
export const selectPath = state => state.navigator.path;
export const selectBasepath = state => state.navigator.basepath;

// Export reducer
export default navigatorSlice.reducer;
