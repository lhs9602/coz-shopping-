import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@/Redux/reducer';

const store = configureStore({
    reducer: productSlice,
  });


export default store;