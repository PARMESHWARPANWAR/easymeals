import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterContext } from "../../context/FilterContext";
const ProductItem = ({ product }) => {
  const productId = product?.id;
  const { name, image, stock } = product;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { setWishItems } = useContext(FilterContext);

  const handleToggleWishlist = () => {
    // Check if the item is already in the wishlist
    const wishlistItems = localStorage.getItem("wishItems")
      ? JSON.parse(localStorage.getItem("wishItems"))
      : [];
    const itemIndex = wishlistItems.findIndex((item) => item.id === productId);

    if (itemIndex === -1) {
      // If the product is not in the cart, add it as a new item
      const newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      // Add the item to the wishlist
      wishlistItems.push(newCartItem);
      setIsInWishlist(true);
      toast.success("Product added in wish list successfully!");
    } else {
      // Remove the item from the wishlist
      wishlistItems.splice(itemIndex, 1);
      setIsInWishlist(false);
      toast.error("Product removed from wish list");
    }

    // Update the wishlist in localStorage
    setWishItems(wishlistItems);
    localStorage.setItem("wishItems", JSON.stringify(wishlistItems));
  };

  useEffect(() => {
    const wishlistItems = localStorage.getItem("wishItems")
      ? JSON.parse(localStorage.getItem("wishItems"))
      : [];

    const itemIndex = wishlistItems.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      setIsInWishlist(true);
    }
  }, [productId]);

  return (
    <>
      <div data-testid='ProductItem' className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-300">
        <Link href={`/products/${product.id}`}>
          <img className="w-full w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
        </Link>
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 text-sm mt-2">
              Preparation Time: 15 mins
            </div>
            <button data-testid='favoriteBtn' onClick={handleToggleWishlist}>
              <FavoriteIcon
                style={{
                  color: isInWishlist ? "red" : "white",
                  cursor: "pointer",
                }}
              />
            </button>
            {/* <div className="text-gray-600 text-sm">{`Stock: ${stock}`}</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
