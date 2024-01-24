import React from "react";
import { useQuery } from "react-query";
import { getProduct } from "../../services/api";
import ProductData from "./ProductData";

function Products() {
  const { isLoading, error, data } = useQuery("products", getProduct);

  if (isLoading)
    return (
      <div className="flex h-screen w-full font-bold text-3xl justify-center items-center">
        Loading...
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 flex justify-center items-center bg-gray-100 rounded-xl">
      <div className="p-8   overflow-x-auto rounded-md">
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
