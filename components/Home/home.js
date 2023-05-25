import React, { useState } from "react";
import AppLayout from "../AppLayout";
import Sidebar from "../Sidebar";
import Products from "../Products/products";
import HeaderMain from "../Header/HeaderMain";
import Header from "../Header/Header";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [foodsList, setFoodsList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All Categories");

  const handleFilterChange = (filter) => {
    // Check if the filter is already selected
    const isSelected = selectedFilters.includes(filter);

    // Update the selectedFilters state based on checkbox selection
    if (isSelected) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <AppLayout>
      <Header
        category={category}
        keyword={keyword}
        setCategory={setCategory}
        setKeyword={setKeyword}
      />
      <HeaderMain />
      <div className="flex">
        <div className="sm:w-1/4 max-h-screen overflow-y-auto">
          <Sidebar
            keyword={keyword}
            handleFilterChange={handleFilterChange}
            setKeyword={setKeyword}
          />
        </div>
        <div className="w-full sm:w-3/4 overflow-y-auto max-h-screen no-scrollbar mt-2">
          <Products
            keyword={keyword}
            category={category}
            selectedFilters={selectedFilters}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
