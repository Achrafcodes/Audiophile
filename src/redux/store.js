import { configureStore } from '@reduxjs/toolkit';
import authReducer from './loginRedux';
import productsSlice from './ProductSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    cart: cartSlice
  }
});

export default store;
