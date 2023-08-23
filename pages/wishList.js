import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header/Header";
import HeaderMain from "@/components/Header/HeaderMain";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterContext } from "../context/FilterContext";

const WishList = () => {
  const { wishItems, setWishItems } = useContext(FilterContext);

  const removeItems = (productId) => {
    // Check if the item is already in the wishlist
    const wishlistItems = localStorage.getItem("wishItems")
      ? JSON.parse(localStorage.getItem("wishItems"))
      : [];
    const itemIndex = wishlistItems.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
      // Remove the item from the wishlist
      wishlistItems.splice(itemIndex, 1);
      toast.error("Product removed from wish list");
      // Update the wishlist in localStorage
      setWishItems(wishlistItems);
      localStorage.setItem("wishItems", JSON.stringify(wishlistItems));
    }
  };

  return (
    <AppLayout>
      <Header />
      <HeaderMain />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">WishList</h2>
        {wishItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 ">
            {wishItems.map((item) => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  className="w-24 h-24 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <button
                    class="px-2 bg-red-300 rounded-md"
                    onClick={() => removeItems(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AppLayout>
  );
};

export default WishList;
