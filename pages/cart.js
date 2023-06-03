import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header/Header";
import HeaderMain from "@/components/Header/HeaderMain";
import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(FilterContext);

  const removeItems = (productId) => {
    // Check if the item is already in the wishlist
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
    const itemIndex = cartItems.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      toast.error("Product removed from cart list");
      setCartItems(cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  return (
    <AppLayout>
      <Header />
      <HeaderMain />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  className="w-24 h-24 rounded object-cover"
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

export default Cart;
