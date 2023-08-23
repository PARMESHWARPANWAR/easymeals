import React, { useState } from "react";
import AppLayout from "../AppLayout";
import Sidebar from "../Sidebar";
import Products from "../Products/products";
import HeaderMain from "../Header/HeaderMain";
import Header from "../Header/Header";

const Home = () => {
  return (
    <AppLayout>
      <Header />
      <HeaderMain />
      <div className="flex">
        <div className="sm:w-1/4 max-h-screen overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full sm:w-3/4 overflow-y-auto max-h-screen no-scrollbar mt-2">
          <Products />
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
