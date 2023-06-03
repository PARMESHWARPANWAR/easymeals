import React, { createContext, useEffect, useState } from "react";
export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    const cartItemsList = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cartItemsList);
    const wishItemsList = JSON.parse(localStorage.getItem("wishItems")) || [];
    setWishItems(wishItemsList);
  }, []);

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
