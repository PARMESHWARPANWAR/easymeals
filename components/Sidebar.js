import { useState } from "react";
import {
  seasons,
  dietaryOptions,
  mealOptions,
  sweetOptions,
} from "@/pages/api/filters";
import { Search } from "@mui/icons-material";

const Sidebar = ({ keyword, handleFilterChange, setKeyword }) => {
  const searchSubmitHandler = () => {
    setKeyword(keywordSearch);
  };

  return (
    <div className="w-full py-4 hidden sm:block overflow-y-auto no-scrollbar h-full">
      <span className="text-lg font-semibold mb-2">Filter Recipes</span>
      <p className="text-gray-400">
        Check multiple boxes below to narrow recipe search results:
      </p>
      <div className="my-4">
        <h4 className="font-semibold mb-2">By Season:</h4>
        <ul>
          {seasons.map((season) => (
            <li
              key={season}
              className="mb-1 text-gray-400"
              onChange={() => handleFilterChange(season)}
            >
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {season}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">By Dietary Preference:</h4>
        <ul>
          {dietaryOptions.map((option) => (
            <li
              key={option}
              className="mb-1 text-gray-400"
              onChange={() => handleFilterChange(option)}
            >
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">By Meal:</h4>
        <ul>
          {mealOptions.map((option) => (
            <li
              key={option}
              className="mb-1 text-gray-400"
              onChange={() => handleFilterChange(option)}
            >
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16">
        <h4 className="font-semibold mb-2">Sweet Things:</h4>
        <ul>
          {sweetOptions.map((option) => (
            <li
              key={option}
              className="mb-1 text-gray-400"
              onChange={() => handleFilterChange(option)}
            >
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="items-center mb-16">
        <span>Search Recipe Titles..</span>
        <input
          type="text"
          value={keyword}
          placeholder="Enter keyword..."
          className="py-4 px-4 text-sm h-6 border border-gray-300 focus:outline-none"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="py-1 px-1 bg-black hover:bg-blue-700 text-white  focus:outline-none"
          onClick={searchSubmitHandler}
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
