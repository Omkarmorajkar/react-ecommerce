import React from "react";
import { useQuery } from "react-query";
import { getProduct } from "../../services/api";
import ProductData from "./ProductData";

function Products() {
  const { isLoading, error, data, refetch } = useQuery("products", getProduct, {
    staleTime: 60000, // Example: data is considered fresh for 10 seconds
  });

  console.log(error);

  if (isLoading)
    return (
      <div className="flex h-screen w-full dark:text-slate-200 font-bold text-3xl justify-center items-center">
        Loading...
      </div>
    );

  if (error) {
    return (
      <div className="p-4 flex justify-center items-center bg-red-100 rounded-xl dark:bg-red-800 dark:text-white">
        <div className="p-8 overflow-x-auto rounded-md">
          <h2 className="font-bold text-4xl mb-4 ">Error</h2>
          <p>Error: {error.message}</p>
          <button
            onClick={() => refetch()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex justify-center items-center bg-gray-100 rounded-xl dark:bg-slate-800 dark:text-white">
      <div className="p-8 overflow-x-auto rounded-md">
        <h2 className="font-bold text-4xl mb-4 ">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductData key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
