import { createSlice } from '@reduxjs/toolkit';
import { products } from '../products';

const initialState = {
  items: products
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {}
});

export const selectItemById = (state, id) =>
  state.items.items.find(item => item.id === id);

export default itemsSlice;
