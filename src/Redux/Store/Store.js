import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../reducer/reducer.js";
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: productSlice,
  middleware: [thunkMiddleware],
});

export default store;
