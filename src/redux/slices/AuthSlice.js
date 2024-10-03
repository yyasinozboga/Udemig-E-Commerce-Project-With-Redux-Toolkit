import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  name: null,
  password: null,
  image: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.password = payload.password;
      state.image = payload.image;
    },

    logOut: (state) => {
      state.isAuth = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
