import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, getTotalCartQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function ProductData({ item }) {
  const dispatch = useDispatch();
  const { id, title, price, category, image, rating } = item;

  const navigate = useNavigate();
  const currentQuantity = useSelector(getTotalCartQuantityById(id));

  const isInCart = currentQuantity > 0;

  const handleClick = () => {
    console.log(id);
    navigate(`/viewProduct/${id}`);
  };

  const handleCart = () => {
    const newItem = {
      productId: id,
      image,
      title,
      category,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  };

  return (
    <div className="max-w-md flex flex-col flex-wrap h-full rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-slate-700 transition relative duration-500 shadow-lg bg-white dark:bg-slate-700">
      <div className="w-full flex justify-center items-center p-4">
        <img
          className="w-48 h-48 rounded-lg  bg-center "
          src={image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4 ">
        <div className="font-bold min-h-[4rem]  line-clamp-2 text-xl mb-2">
          {title}
        </div>
        <p className="text-gray-700 dark:text-slate-200 text-base mb-2">
          {category}
        </p>
        <p className="text-gray-700 dark:text-slate-200 text-base mb-2">
          ${price}
        </p>
        <div className="flex items-center">
          <span className="text-gray-600 dark:text-slate-200">
            Rating: {rating.rate}
          </span>
        </div>
      </div>
      <div className=" flex flex-wrap flex-col gap-2 px-4 py-2 md:px-6 md:py-4 ">
        {isInCart ? (
          <UpdateItemQuantity
            productId={id}
            currentQuantity={currentQuantity}
            size={"w-16"}
          />
        ) : (
          <button
            onClick={handleCart}
            className="bg-green-500 md:px-4 md:py-2 px-3 py-1 rounded-xl text-sm hover:bg-green-600 text-white font-bold"
          >
            Add to cart
          </button>
        )}

        <button
          onClick={handleClick}
          className="bg-gray-200 hover:bg-gray-300 dark:bg-slate-500 rounded-xl font-bold md:py-2 md:px-4 px-3 py-1 text-sm shadow-lg"
        >
          View Product
        </button>
      </div>
    </div>
  );
}

export default ProductData;
