import { configureStore } from '@reduxjs/toolkit';
import Productslice from './ProductSlice';
import loginSlice from './loginRedux';
export default configureStore({
  reducer: {
    items: Productslice.reducer,
    login: loginSlice
  }
});
