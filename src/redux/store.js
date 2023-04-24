import { configureStore } from '@reduxjs/toolkit';
import Productslice from './ProductSlice';

export default configureStore({
  reducer: {
    items: Productslice.reducer
  }
});
