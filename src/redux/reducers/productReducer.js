import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  detail: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.productList = action.payload.data;
      state.detail = [];
    },
    getDetail(state, action) {
      state.detail = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
