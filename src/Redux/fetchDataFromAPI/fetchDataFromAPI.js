import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateBookmarksInLocalStorage } from 'Redux/localStorage/localStorage.js';

export const fetchDataFromAPI = createAsyncThunk(
  'product/fetchData',
  () => {
    return axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(response => {
        const data = response.data;
        const modifiedData = data.map(item => ({ ...item, bookmark: false }));
        updateBookmarksInLocalStorage(modifiedData); // Local Storage 업데이트
        return modifiedData;
      })
      .catch(error => {
        throw error;
      });
  }
);