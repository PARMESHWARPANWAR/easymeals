import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header/Header";
import HeaderMain from "@/components/Header/HeaderMain";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cartItems);
  }, []);

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
