import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();

  const buttonStyle =
    "px-2 font-bold hover:bg-gray-400 py-1 w-16 rounded-xl bg-gray-300";

  return (
    <div className="flex justify-between gap-3 items-center  rounded-xl">
      <button
        className={buttonStyle}
        onClick={() => {
          dispatch(increaseItemQuantity(productId));
        }}
      >
        +
      </button>
      <span className="font-bold dark:text-slate-200">{currentQuantity}</span>
      <button
        className={buttonStyle}
        onClick={() => {
          dispatch(decreaseItemQuantity(productId));
        }}
      >
        -
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
