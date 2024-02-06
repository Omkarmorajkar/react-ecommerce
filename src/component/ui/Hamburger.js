import React from "react";

function Hamburger({ toggleSidebar, isOpen }) {
  return (
    <button onClick={toggleSidebar} className="p-2 relative outline-none">
      <div className="hamburger-icon">
        <span
          className={`block  h-1 w-6 bg-black dark:bg-white transition-transform duration-500 transform ${
            isOpen ? "rotate-45 translate-y-2 " : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-4 bg-black mt-1 dark:bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-black mt-1 dark:bg-white transition-transform duration-500 transform ${
            isOpen ? "-rotate-45 -translate-y-2 " : ""
          }`}
        ></span>
      </div>
    </button>
  );
}

export default Hamburger;
