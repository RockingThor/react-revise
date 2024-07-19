import { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const filledStar = "⭐";
  const emptyStar = "☆";

  const submitButtonClicked = () => {
    console.log("Hello");
  };
  const starClicked = (index) => {
    setRating(index + 1);
  };

  const arr = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];
  return (
    <>
      <div className="starComponent">
        {arr.map((element, index) => (
          <div className="star" key={index} onClick={() => starClicked(index)}>
            {index < rating ? filledStar : emptyStar}
          </div>
        ))}
      </div>

      <button onClick={submitButtonClicked} className="ratingSubmitBtn">
        Submit Rating
      </button>
    </>
  );
};

export default StarRating;
