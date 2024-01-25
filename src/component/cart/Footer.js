import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../Products/cartSlice";

const Footer = ({ total }) => {
  const dispatch = useDispatch();
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-slate-700 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xl font-bold dark:text-slate-200">
          Total: ${total.toFixed(2)}
        </p>
        {/* Add checkout or other actions here */}
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </footer>
  );
};

export default Footer;
