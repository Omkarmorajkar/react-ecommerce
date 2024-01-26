import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./component/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
