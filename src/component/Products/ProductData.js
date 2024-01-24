import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "./cartSlice";
import store from "../../store";

function ProductData({ item }) {
  const dispatch = useDispatch();
  const { id, title, price, category, image, rating } = item;

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(id);
    navigate(`/viewProduct/${id}`);
  };

  const handleCart = () => {
    const newItem = {
      productId: id,
      image,
      title,
      price,
      category,
      quantity: 1,
    };

    dispatch(addItem(newItem));
    const updatedState = store.getState();
    console.log(updatedState.cart.cart);
  };

  return (
    <div className="max-w-md flex flex-col flex-wrap h-full rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-400 transition relative duration-500 shadow-lg bg-white">
      <div className="w-full flex justify-center items-center p-4">
        <img className="w-48 h-48  bg-center" src={image} alt={title} />
      </div>
      <div className="px-6 py-4 ">
        <div className="font-bold min-h-[4rem]  line-clamp-2 text-xl mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-base mb-2">{category}</p>
        <p className="text-gray-700 text-base mb-2">${price}</p>
        <div className="flex items-center">
          <span className="text-gray-600">Rating: {rating.rate}</span>
        </div>
      </div>
      <div className=" flex flex-wrap flex-col gap-2 px-4 py-2 md:px-6 md:py-4 ">
        <button
          className="bg-gray-200 rounded-xl font-bold md:py-2 md:px-4 px-3 py-1 text-sm shadow-lg"
          onClick={handleClick}
        >
          View Product
        </button>

        <button
          onClick={handleCart}
          className="bg-green-500 md:px-4 md:py-2 px-3 py-1 rounded-xl text-sm hover:bg-green-600 text-white font-bold"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductData;
