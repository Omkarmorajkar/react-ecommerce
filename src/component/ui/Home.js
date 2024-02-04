import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateName } from "../user/userSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.username);

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      dispatch(updateName(username));
      navigate("/products");
    }
    navigate("/products");
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-2 rounded-xl bg-white dark:bg-slate-800 flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-slate-200 ">
          Welcome {user} to Our Ecommerce Store
        </h1>
        <p className="text-lg mb-8 text-black dark:text-slate-200">
          Discover amazing products at unbeatable prices.
        </p>
        {!user && (
          <form onSubmit={handleSubmit} className="m-8">
            <div className="flex flex-col gap-6 justify-center items-center ">
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-80 rounded-full font-bold placeholder:text-white placeholder:font-sans shadow-lg font-sans text-center bg-gray-400 p-2 font-mono outline-double outline-offset-4 outline-gray-400 focus:outline-gray-600 text-white"
              />
            </div>
          </form>
        )}
        {(username || user) && (
          <Link
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300 w-44"
          >
            Shop Now
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
