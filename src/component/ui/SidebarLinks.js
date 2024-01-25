import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faShoppingCart,
  faList,
  // faProductHunt,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

function SidebarLinks({ toggleSidebar }) {
  const LinkStyle =
    "hover:bg-gray-100 dark:hover:bg-slate-600 dark:text-slate-300 flex gap-3 lg:justify-start justify-center items-center hover:shadow-md  hover:rounded-xl hover:text-black w-full text-center px-8 w-16 py-2 font-bold transition-all duration-300";
  return (
    <nav className="space-y-4 mt-16 w-full text-center flex flex-col ">
      <Link className={LinkStyle} to="/" onClick={toggleSidebar}>
        <FontAwesomeIcon className="dark:text-slate-200" icon={faHouse} /> Home
      </Link>
      <Link className={LinkStyle} to="/products">
        <FontAwesomeIcon
          className="dark:text-slate-200"
          icon={faProductHunt}
          onClick={toggleSidebar}
        />
        Products
      </Link>
      <Link className={LinkStyle} to="/about">
        <FontAwesomeIcon
          className="dark:text-slate-200"
          icon={faList}
          onClick={toggleSidebar}
        />
        Category
      </Link>
      <Link className={LinkStyle} to="/cart" onClick={toggleSidebar}>
        <FontAwesomeIcon
          className="dark:text-slate-200"
          icon={faShoppingCart}
        />
        Cart
      </Link>
    </nav>
  );
}

export default SidebarLinks;
