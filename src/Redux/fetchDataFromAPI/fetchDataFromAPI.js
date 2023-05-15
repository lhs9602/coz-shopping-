import {  createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchDataFromAPI = createAsyncThunk(
  'product/fetchData',
  async () => {
    
    const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=10');
    const data = response.data;
    const modifiedData = data.map(item => ({ ...item, bookmark: false }));
    return modifiedData;
  }
);