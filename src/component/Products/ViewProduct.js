import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProduct } from "../../services/api";
import { addItem, getTotalCartQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const currentQuantity = useSelector(getTotalCartQuantityById(id));
  const isInCart = currentQuantity > 0;
  console.log("isinCart " + isInCart);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await singleProduct(id);
        setProduct(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!product)
    return (
      <div className="flex justify-center dark:text-slate-200 items-center w-auto h-[60vh] font-bold text-3xl">
        Loading...
      </div>
    );

  const { image, title, category, price } = product;

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

  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!product)
    return (
      <div className="flex justify-center dark:text-slate-200 items-center w-auto h-[60vh] font-bold text-3xl">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto p-8 dark:text-slate-200">
      <div className="flex justify-center items-center">
        <img
          className="w-full max-h-[50vh] object-contain rounded-2xl"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2 dark:text-slate-200">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-4 dark:text-slate-200">
          {product.category}
        </p>
        <p className="text-gray-800 mb-4 dark:text-slate-200">
          {product.description}
        </p>
        <p className="text-blue-600 font-bold text-lg dark:text-slate-200">
          Price : ${product.price}
        </p>
      </div>

      {isInCart ? (
        <div className=" flex  items-center gap-4">
          Quantity :
          <UpdateItemQuantity
            productId={id}
            currentQuantity={currentQuantity}
            size={"w-12"}
          />
        </div>
      ) : (
        <button
          onClick={handleCart}
          className="bg-green-500 md:px-4 md:py-2 px-3 py-1 rounded-xl text-sm hover:bg-green-600 text-white font-bold"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ViewProduct;
