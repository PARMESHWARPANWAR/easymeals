import React, { Fragment, useContext, useEffect, useState } from "react";
import { products } from "@/pages/api/DummyData/productsData";
import ProductItem from "@/components/Products/productItem";
import { FilterContext } from "../../context/FilterContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const { keyword, category, selectedFilters, setWishItems, setCartItems } =
    useContext(FilterContext);
  const [foodsList, setFoodsList] = useState([]);

  useEffect(() => {
    if (category === "All Categories" || category === "") {
      const filteredFoods = products
        .filter((food) =>
          selectedFilters.every((filter) => food.filters.includes(filter))
        )
        .filter((food) =>
          food.name.toLowerCase().includes(keyword?.toLowerCase())
        );

      setFoodsList(filteredFoods);
    } else {
      const filteredFoods = products
        .filter((food) =>
          selectedFilters.every((filter) => food.filters.includes(filter))
        )
        .filter((food) =>
          food.name.toLowerCase().includes(keyword.toLowerCase())
        )
        .filter((food) => food.categories.includes(category));
      setFoodsList(filteredFoods);
    }
  }, [selectedFilters, keyword, category]);

  return (
    <Fragment>
      {false ? (
        <div>Loading Component</div>
      ) : (
        <Fragment>
          {foodsList?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {foodsList.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>No products found for the selected filters.</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
