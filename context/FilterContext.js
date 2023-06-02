import React, { createContext, useState } from "react";
export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  return (
    <FilterContext.Provider
      value={{
        keyword,
        setKeyword,
        category,
        setCategory,
        selectedFilters,
        setSelectedFilters,
        cartItems,
        setCartItems,
        wishItems,
        setWishItems,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
