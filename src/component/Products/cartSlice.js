import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      console.log(state.cart);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
