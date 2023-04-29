import { configureStore } from '@reduxjs/toolkit';
import authReducer from './loginRedux';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
