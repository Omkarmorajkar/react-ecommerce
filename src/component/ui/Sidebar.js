import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "./Hamburger";
import SidebarLinks from "./SidebarLinks";
import { motion } from "framer-motion";

const SidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const sidebarStyles = `
  col-span-12 lg:col-span-2 md:col-span-12 sm:col-span-12 
  ${isOpen ? "lg:translate-x-0 " : "hidden"}  
  ease-in-out   shadow-lg shadow-gray-500 mb-2 rounded-xl top-2 h-[90vh] bg-white overflow-x-hidden
`;
  const contentAreaClass = ` ${
    isOpen
      ? "lg:col-span-10 md:hidden sm:hidden lg:translate-x-0 translate-x-full hidden lg:block "
      : "col-span-12 "
  } `;

  return (
    <div className="grid grid-cols-12 gap-2 ">
      {/* Navbar */}
      <div className="z-30 col-span-12 bg-white   rounded-md text-white p-2">
        {/* bg-gradient-to-r from-blue-500 to-blue-300 */}
        <div className="flex justify-between px-8 items-center">
          <Hamburger isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex gap-4 font-bold text-black">
            {/* <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link> */}
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={sidebarStyles}
      >
        <div className="lg:p-4 p-2 w-full">
          <SidebarLinks toggleSidebar={toggleSidebar} />
        </div>
      </motion.div>

      <div
        className={`${contentAreaClass} overflow-x-auto md:overflow-x-hidden`}
      >
        <main className="w-full  flex flex-col items-center h-[90vh] overflow-y-auto p-4 bg-gray-100 rounded-xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarComponent;
