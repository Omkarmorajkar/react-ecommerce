import React from "react";

function Home() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-2 rounded-xl bg-white dark:bg-slate-800 flex justify-center items-center">
      <div className="  text-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-slate-200 ">
          Welcome to Our Ecommerce Store
        </h1>
        <p className="text-lg mb-8 text-black dark:text-slate-200">
          Discover amazing products at unbeatable prices.
        </p>
        <a
          href="/shop"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Home;
