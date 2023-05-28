import React, { createContext, useState } from "react";
export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <FilterContext.Provider
      value={{
        keyword,
        setKeyword,
        category,
        setCategory,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
