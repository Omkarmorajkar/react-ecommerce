import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { singleProduct } from "../../services/api";

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
          ${product.price}
        </p>
      </div>
      <button
        className="bg-gray-400 shadow-lg px-4 py-2 rounded-lg hover:bg-gray-300"
        onClick={() => {
          navigate("/");
        }}
      >
        back
      </button>

      <button className="bg-green-500 ml-4 hover:bg-green-700 px-4 py-2 text-white rounded-xl">
        Add to Cart
      </button>
    </div>
  );
}

export default ViewProduct;
