import { createSlice } from '@reduxjs/toolkit';
import { fetchDataFromAPI } from '../fetchDataFromAPI/fetchDataFromAPI.js';
import { updateBookmarkInLocalStorage, removeBookmarkFromLocalStorage } from 'Redux/localStorage/localStorage.js';


const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers:  {
    bookMarkIn: (state, action) => {
    const id  = action.payload;
    state.data.forEach(item => {
      if (item.id === id) {
        item.bookmark = true;
        updateBookmarkInLocalStorage(id); // Local Storage에 해당 id 저장
      }
    });
  },
  bookMarkOut: (state, action) => {
    const id  = action.payload;
    state.data.forEach(item => {
      if (item.id === id) {
        item.bookmark = false;
        removeBookmarkFromLocalStorage(id); // Local Storage에서 해당 id 삭제
      }
    });
  }
},
  extraReducers: builder => {
    builder
      .addCase(fetchDataFromAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataFromAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataFromAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { bookMarkOut, bookMarkIn } = productSlice.actions;
export default productSlice.reducer; 