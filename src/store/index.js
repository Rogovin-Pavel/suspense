import { configureStore } from '@reduxjs/toolkit';
import { aboutReducer } from './reducers/aboutReducer.js';

export default configureStore({
  reducer: {
    about: aboutReducer,
  },
});
