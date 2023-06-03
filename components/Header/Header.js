import Link from "next/link";
import { Search, ShoppingCart } from "@mui/icons-material";
import { categories } from "@/pages/api/filters";
import { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FilterContext } from "../../context/FilterContext";

const Header = () => {
  const { keyword, setKeyword, category, setCategory, cartItems, wishItems } =
    useContext(FilterContext);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <nav className="flex justify-between items-center rounded-md py-2 px-4">
      <Link href={`/`}>
        <li className="text-xl font-bold text-gray-700 list-none">Logo</li>
      </Link>

      <div className="flex items-center space-x-4  rounded-sm bg-white border border-gray-400">
        <select
          className="py-1 px-4 bg-gray-200 m-1 focus:outline-none"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="py-1 px-2 bg-white text-gray-700 focus:outline-none"
          placeholder="Search recipes..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button className="text-gray-700 cursor-pointer bg-yellow-300 px-3 py-2">
          <Search />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <Link href={`/wishList`}>
          <FavoriteIcon
            className="text-gray-700"
            style={{
              color: wishItems?.length > 0 ? "red" : "white",
            }}
          />
          Favorites{`(${wishItems?.length})`}
        </Link>

        <Link href={`/cart`}>
          <ShoppingCart className="text-gray-700" />
          cart {`(${cartItems?.length})`}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
