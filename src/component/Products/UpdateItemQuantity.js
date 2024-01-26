import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";

function UpdateItemQuantity({ productId, currentQuantity, size }) {
  const dispatch = useDispatch();

  const buttonStyle = `px-2 font-bold hover:bg-gray-400 py-1 ${size} rounded-xl bg-gray-300 dark:text-slate-800`;

  return (
    <div className="flex justify-between gap-3 items-center  rounded-xl">
      <button
        className={buttonStyle}
        onClick={() => {
          dispatch(decreaseItemQuantity(productId));
        }}
      >
        -
      </button>
      <span className="font-bold dark:text-slate-200">{currentQuantity}</span>

      <button
        className={buttonStyle}
        onClick={() => {
          dispatch(increaseItemQuantity(productId));
        }}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
