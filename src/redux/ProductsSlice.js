import { createSlice } from '@reduxjs/toolkit';
import productsData from '../Product.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: { products: productsData.products, selectedProduct: null },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = state.products.find(
        product => product.id === action.payload
      );
    }
  }
});

export const { selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
