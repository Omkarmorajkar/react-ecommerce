import React from "react";
import { Link } from "react-router-dom";

function SidebarLinks({ toggleSidebar }) {
  return (
    <nav className="space-y-4 mt-16 w-full text-center flex flex-col">
      <Link
        className="hover:bg-gray-100 hover:shadow-md  hover:rounded-xl hover:text-black w-full text-center px-16 py-2 font-bold transition-all duration-300"
        to="/"
        onClick={toggleSidebar}
      >
        Home
      </Link>
      <Link
        className="hover:bg-gray-100 hover:shadow-md  hover:rounded-xl hover:text-black w-full text-center px-16 py-2 font-bold transition-all duration-300"
        to="/products"
      >
        Products
      </Link>
      <Link
        className="hover:bg-gray-100 hover:shadow-md  hover:rounded-xl hover:text-black w-full text-center px-16 py-2 font-bold transition-all duration-300"
        to="/about"
      >
        Category
      </Link>
      <Link
        className="hover:bg-gray-100 hover:shadow-md  hover:rounded-xl hover:text-black w-full text-center px-16 py-2 font-bold transition-all duration-300"
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}

export default SidebarLinks;
