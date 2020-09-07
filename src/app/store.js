import { configureStore } from '@reduxjs/toolkit';
import navigatorReducer from '../features/navigator/navigatorSlice';

export default configureStore({
  reducer: {
    navigator: navigatorReducer
  }
});
