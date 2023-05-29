import { useRouter } from "next/router";

import { products } from "@/pages/api/DummyData/productsData";
import { restaurants } from "@/pages/api/DummyData/restaurantsData";
import { Fragment, useEffect, useState } from "react";
import { Rating } from "@mui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import ReviewCard from "@/components/Review/ReviewCard";
import AppLayout from "@/components/AppLayout";
import Header from "@/components/Header/Header";
import HeaderMain from "@/components/Header/HeaderMain";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the product with the matching id
  const product = products.find((product) => product.id == id);
  let restaurant = null;
  let options = {
    size: "large",
    value: product?.rating,
    readOnly: true,
    precision: 0.5,
  };
  useEffect(() => {
    if (product) {
      let avgRating =
        product.reviews
          .map((review) => review.rating)
          .reduce((sum, rating) => sum + rating, 0) / product.reviews?.length;
      avgRating = avgRating ? avgRating.toFixed(2) : 0;
      product["rating"] = Number(avgRating);

      restaurant = restaurants.find(
        (restaurant) => restaurant.id === product.restaurantId
      );
      console.log("product=>", product, id, products[15].id);
    }
    options = {
      size: "large",
      value: product?.rating,
      readOnly: true,
      precision: 0.5,
    };
  }, [product]);

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (!product.stock) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    setOpen(false);
  };

  const addToCartHandler = () => {
    //add Product to session store
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      existingCartItems[existingProductIndex].quantity = quantity;
    } else {
      // If the product is not in the cart, add it as a new item
      const newCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      };

      existingCartItems.push(newCartItem);
    }
    // Save the updated cart in localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    toast.success(`Item Added To Cart`);
  };

  return (
    <AppLayout>
      <Header />
      <HeaderMain />
      <div className="overflow-y-auto max-h-screen no-scrollbar">
        <div className="flex flex-col md:flex-row justify-evenly md:p-20">
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={product?.image}
              alt={product?.name}
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div className="">
              <h2 className="text-2xl font-bold mb-1">{product?.name}</h2>
              <p className="text-gray-500 text-xs">Product # {product?.id}</p>
            </div>

            <div className="border-b border-gray-200 w-[70%] mb-4" />
            <div className="flex items-center mb-4">
              <Rating {...options} />
              <span className="ml-2 text-gray-500">
                ({product?.numOfReviews} Reviews)
              </span>
            </div>
            <div className="border-b border-gray-200 w-[70%] my-4" />
            <div className="flex flex-col items-start mb-4">
              <h1 className="text-2xl font-bold">{`₹${product?.price}`}</h1>
              <div className="flex items-center mt-2">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 bg-gray-200 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-200">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 bg-gray-200 rounded-r"
                >
                  +
                </button>
                <button
                  // disabled={!product?.stock}
                  onClick={addToCartHandler}
                  className="ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
                >
                  Add to Cart
                </button>
              </div>
              <div className="border-b border-gray-200 w-[70%] my-2" />
              <p className="mt-2 ">
                Status:
                <b
                  className={product?.stock ? "text-green-500" : "text-red-500"}
                >
                  {product?.stock < 1 ? "Product Not Available" : "Available"}
                </b>
              </p>
              <div className="border-b border-gray-200 w-[70%] py-2" />
            </div>
            <div className="mb-4">
              <p className="text-gray-500 mb-1">Description:</p>
              <p>{product?.description}</p>
            </div>
            <button
              onClick={submitReviewToggle}
              className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
            >
              Submit Review
            </button>
          </div>
        </div>

        <h3 className="text-black text-opacity-60 font-medium text-lg text-center border-b border-gray-300 py-2 w-1/5 mx-auto mb-8">
          REVIEWS
        </h3>

        <Dialog
          aria-labelledby="simple-dialog-title"
          open={open}
          onClose={submitReviewToggle}
        >
          <DialogTitle>Submit Review</DialogTitle>
          <DialogContent className="flex flex-col">
            <Rating
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              size="large"
            />

            <textarea
              className="border border-gray-300 outline-none p-4 text-sm my-4"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={submitReviewToggle} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={reviewSubmitHandler}
              color="primary"
              className="border-none bg-tomato font-medium text-white rounded-lg px-4 py-2 my-4 cursor-pointer transition-all duration-500 outline-none hover:bg-red-500 transform hover:scale-110"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        {product?.reviews && product?.reviews[0] ? (
          <div className="flex overflow-auto mb-4 mx-2">
            {product?.reviews &&
              product?.reviews.map((review) => (
                <ReviewCard key={review?.id} review={review} />
              ))}
          </div>
        ) : (
          <p className="noReviews">No Reviews Yet</p>
        )}
      </div>
    </AppLayout>
  );
};

export default ProductDetails;
