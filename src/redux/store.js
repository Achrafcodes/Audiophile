import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';

export default configureStore({
  reducer: {
    items: itemsSlice.reducer
  }
});
