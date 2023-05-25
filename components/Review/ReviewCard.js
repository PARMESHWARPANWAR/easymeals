import { Rating } from "@mui/lab";
import React from "react";
// import { profilePng } from "../../public/profile";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center bg-gray-400 w-60">
      <img
        src="https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg"
        alt="User"
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <p className="text-xl font-semibold mb-2">{review.name}</p>
        <div className="mb-2 ">
          <Rating {...options} />
        </div>
        <p className="text-gray-600">{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
