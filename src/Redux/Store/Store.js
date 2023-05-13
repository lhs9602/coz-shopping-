import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../reducer/reducer.js";


const store = configureStore({
    reducer: productSlice,
  });

 
export default store;