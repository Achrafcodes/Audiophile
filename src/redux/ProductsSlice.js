import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name:"Product",
  initialState:{

      "id":"",
      "name":"",
      "description":"",
      "price":"",
      "image":"",
       "category":"",
  },
  reducers:{
    products:(state,actions)=>{
      state.value = actions.payload
    }
  }
})
export const {products} = ProductSlice.actions;
export default ProductSlice.reducer
