import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header/Header";
import HeaderMain from "@/components/Header/HeaderMain";
import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    const wishItems = JSON.parse(localStorage.getItem("wishItems")) || [];
    setWishItems(wishItems);
  }, []);
  return (
    <AppLayout>
      <Header />
      <HeaderMain />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">WishList</h2>
        {wishItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
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
