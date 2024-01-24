import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./component/Products/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
