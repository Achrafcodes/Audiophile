import { createSlice } from '@reduxjs/toolkit';
import { products } from '../products';

const initialState = {
  items: products,
  selectedCategory: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const selectItemById = (state, id) =>
  state.products.items.find(item => item.id === id);

export const selectCategory = state => state.products.selectedCategory;

export default productsSlice;
