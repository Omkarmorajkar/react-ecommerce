import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShoppingCart,
  faList,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function SidebarLinks({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
    },
  };

  const LinkStyle =
    "hover:bg-gray-100 dark:hover:bg-slate-600 dark:text-slate-300 flex gap-3 lg:justify-start justify-center items-center hover:shadow-md  hover:rounded-xl hover:text-black w-full text-center px-8 w-16 py-2 font-bold transition-all duration-300";

  const DropdownStyle = `
    mt-2 
    w-full 
    bg-gray-100
    dark:bg-slate-700
    dark:text-slate-200
    rounded-xl
    shadow-lg
    ${isOpen ? "" : "h-0"}
  `;

  const catStyle =
    "block px-4 py-2 text-sm text-left font-bold text-gray-700 dark:text-slate-200 hover:rounded-xl dark:hover:bg-slate-600 hover:bg-gray-100";

  return (
    <nav className="space-y-4 mt-16 w-full text-center flex flex-col relative">
      <Link className={LinkStyle} to="/" onClick={toggleSidebar}>
        <FontAwesomeIcon className="dark:text-slate-200" icon={faHouse} /> Home
      </Link>
      <Link className={LinkStyle} to="/products" onClick={toggleSidebar}>
        <FontAwesomeIcon className="dark:text-slate-200" icon={faProductHunt} />
        Products
      </Link>
      <div className="relative">
        <Link to="#" className={LinkStyle} onClick={handleClick}>
          <FontAwesomeIcon className="dark:text-slate-200" icon={faList} />
          Category
          <FontAwesomeIcon
            className="dark:text-slate-200 text-black font-bold  cursor-pointer"
            icon={isOpen ? faAngleUp : faAngleDown}
          />
        </Link>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={dropdownVariants}
          className={DropdownStyle}
        >
          {/* Dropdown Items */}
          <Link to="/category1" className={catStyle} onClick={toggleSidebar}>
            Electronics
          </Link>
          <Link to="/category2" className={catStyle} onClick={toggleSidebar}>
            Jewelery
          </Link>
          <Link to="/category2" className={catStyle} onClick={toggleSidebar}>
            Men's clothing
          </Link>
          <Link to="/category2" className={catStyle} onClick={toggleSidebar}>
            Women's clothing
          </Link>
        </motion.div>
      </div>
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
