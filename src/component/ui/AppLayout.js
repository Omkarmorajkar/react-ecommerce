import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
import SidebarComponent from "./Sidebar";

function AppLayout() {
  return (
    <>
      <header>
        {/* <Navbar /> */}
        <SidebarComponent />
      </header>
      {/* <div className="bg-gray-">
        <Outlet />
      </div> */}
    </>
  );
}

export default AppLayout;
