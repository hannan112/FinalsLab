import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://emojihub.yurace.pro/api/all');
    return response.data;
  }
);

export const fetchCategoryDetails = createAsyncThunk(
  'categories/fetchCategoryDetails',
  async (category) => {
    const response = await axios.get(`https://category.name/${category}`);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    categoryDetails: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCategoryDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categoryDetails = action.payload;
      })
      .addCase(fetchCategoryDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
