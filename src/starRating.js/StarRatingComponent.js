import React, { useState } from "react";

const StarRatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      {[1, 2, 3, 4, 5].map((num) => (
        <button className="h-20 w-20 text-6xl border-none outline-none"
        onClick={() => setRating(num)}
        onMouseOver={() => setHover(num)}
        onMouseLeave={() => setHover(rating)}>
          <span className={`${(num <= (hover || rating)) ? "text-yellow-300": "text-gray-400"}`}>&#9733;</span>
        </button>
      ))}
    </div>
  );
};

export default StarRatingComponent;


