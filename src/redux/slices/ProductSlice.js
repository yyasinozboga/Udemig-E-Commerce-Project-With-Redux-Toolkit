import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  price: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },

    removeProduct: (state, { payload }) => {
      const index = state.products.findIndex(
        (product) => product.id === payload,
      );
      state.products.splice(index, 1);
    },

    updateProduct: (state, { payload }) => {
      const index = state.products.findIndex(
        (product) => product.id === payload.id,
      );
      state.products.splice(index, 1, payload);
    },

    calculateProduct: (state) => {
      const products = state.products.reduce((a, b) => a + b.amount, 0);
      console.log(products);
      state.amount = products;
    },

    totalPrice: (state) => {
      const total = state.products.reduce((a, b) => a + b.amount * b.price, 0);
      state.price = total;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  calculateProduct,
  totalPrice,
} = productSlice.actions;
export default productSlice.reducer;
