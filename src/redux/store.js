import { configureStore } from "@reduxjs/toolkit";
import products from "./ProductsSlice";
const store = configureStore({
  reducer: {
    products
  },
});

export default store;
