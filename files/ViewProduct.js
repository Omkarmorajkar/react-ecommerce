import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewProduct({ productId }) {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);

  function handleClick() {
    console.log("Back");

    // You can navigate back here if needed
    navigate("/productData");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts or when productId changes
  }, [productId]);

  return (
    <div className="container mx-auto p-6">
      {productData && (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
          <img
            src={productData.image}
            alt={productData.title}
            className="w-full h-auto rounded-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {productData.title}
          </h2>
          <p className="text-gray-600 mb-4">{productData.description}</p>
          <p className="text-gray-800 font-bold text-xl mb-4">
            ${productData.price}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Rating: {productData.rating.rate} ({productData.rating.count}{" "}
            reviews)
          </p>
          <p className="text-gray-600 mb-4">Category: {productData.category}</p>
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg"
            onClick={handleClick}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
