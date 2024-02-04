import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./component/cart/cartSlice";
import userSlice from "./component/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
