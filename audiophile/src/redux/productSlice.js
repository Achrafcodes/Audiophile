import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {
    setProduct: (state, action) => {
      const { id } = action.payload;
      // fetch the JSON data from a file
      fetch('/public/Data.json')
        .then(response => response.json())
        .then(products => {
          // find the product in the JSON data based on its id
          const product = products.find(p => p.id === id);
          // update the state with the product details
          return { ...state, ...product };
        });
    },
  },
});
export const  {setProduct} = productSlice.actions
export default productSlice.reducer
