import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
import SidebarComponent from "./Sidebar";

function AppLayout() {
  return (
    <>
      <header>
        <SidebarComponent />
      </header>
    </>
  );
}

export default AppLayout;
