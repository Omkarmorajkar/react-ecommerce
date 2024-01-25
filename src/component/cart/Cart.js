// Cart.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../Products/UpdateItemQuantity";
import { deleteItem } from "../Products/cartSlice";
import Footer from "./Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const { productId, quantity } = cartItems;
  console.log("Product Id", productId, " quantity ", quantity);

  return (
    <div className="p-4 container max-w-lg">
      <h2 className="text-2xl font-bold mb-4 dark:text-slate-200">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="w-full h-[60vh] flex justify-center items-center text-3xl dark:text-slate-200 font-bold ">
          <p className="w-full">Your cart is empty.</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center mb-4  rounded-xl p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 size-16 object-cover mr-4 rounded-lg"
              />
              <div>
                <p className="text-lg font-bold dark:text-slate-200">
                  {item.title}
                </p>
                <p className="text-gray-600 dark:text-slate-200">
                  {item.category}
                </p>
                <p className="text-gray-800 dark:text-slate-200">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-gray-600 dark:text-slate-200">
                  Quantity: {item.quantity}
                </p>

                <p className="text-gray-800 dark:text-slate-200">
                  Total: ${item.totalPrice.toFixed(2)}
                </p>
                <span className="flex gap-12 items-center">
                  <UpdateItemQuantity
                    productId={item.productId}
                    currentQuantity={item.quantity}
                  />
                  <button
                    className="bg-red-800 hover:bg-red-500  text-white px-3 py-1 rounded-lg"
                    onClick={() => dispatch(deleteItem(item.productId))}
                  >
                    Remove
                  </button>
                </span>
              </div>
            </div>
          ))}
          <div className="p-4">
            <Footer total={total} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
