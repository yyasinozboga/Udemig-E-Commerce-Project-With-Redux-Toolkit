import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import productSlice from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});

export default store;
