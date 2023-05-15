import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateBookmarksInLocalStorage } from 'Redux/localStorage/localStorage.js';

export const fetchDataFromAPI = createAsyncThunk(
  'product/fetchData',
  async () => {
    const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
    const data = response.data;
    const modifiedData = data.map(item => ({ ...item, bookmark: true }));
    updateBookmarksInLocalStorage(modifiedData); // Local Storage 업데이트
    return modifiedData;
  }
);
