import { createSlice } from '@reduxjs/toolkit';
import { fetchDataFromAPI } from '@/redux/fetchDataFromAPI';


const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    bookMarkIn: (state) => {
      state.bookmark = true;
    },
    bookMarkOut: (state) => {
      state.bookmark = false;
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
