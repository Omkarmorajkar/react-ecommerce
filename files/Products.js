import React, { useState } from "react";
import ViewProduct from "./ViewProduct";

function Products({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleClick = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <>
      {!selectedProductId ? (
        <>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border p-6 rounded-lg shadow-md hover:shadow-2xl transform transition duration-300 bg-white"
                >
                  <div className="flex justify-center items-center mb-4 h-[50%]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto rounded-md object-cover object-center"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.title}
                    </h2>

                    <p className="text-gray-600 mb-2">{product.category}</p>
                    <p className="text-gray-800 font-bold text-xl">
                      ${product.price}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Rating: {product.rating.rate}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleClick(product.id)}
                      className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <ViewProduct productId={selectedProductId} />
      )}
    </>
  );
}

export default Products;
