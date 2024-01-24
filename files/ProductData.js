import React, { useEffect, useState } from "react";
import { prodData } from "../../services/api";
import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductData() {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [isLoading, setLoading] = useState(true); // Set initial loading state to true
  // console.log("Products " + products);

  useEffect(() => {
    // Set loading state to true when fetching data
    setLoading(true);

    prodData()
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false after data is fetched successfully
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false if there's an error
        toast.error("Error fetching data!");
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <p className="font-bold text-3xl">Loading...</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold my-4 p-3">Product List</h1>
            <Products products={products} />
          </>
        )}
      </div>
    </>
  );
}

export default ProductData;
