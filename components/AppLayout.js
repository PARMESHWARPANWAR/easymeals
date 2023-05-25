import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Header/Navbar";
import Header from "./Header/Header";
import HeaderMain from "./Header/HeaderMain";

const AppLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="px-24">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
