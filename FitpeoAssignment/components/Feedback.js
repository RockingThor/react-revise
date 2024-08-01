import React from "react";
import "../style/Feedback.css";

const Feedback = () => {
  const feedbacks = [
    { name: "Jenny Wilson", comment: "Great food!", rating: 5 },
    { name: "Dianne Russell", comment: "Excellent service!", rating: 4 },
    // more feedbacks
  ];

  return (
    <div className="feedback">
      <h2>Customer's Feedback</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.name}>
            <p>{feedback.comment}</p>
            <span>{"⭐".repeat(feedback.rating)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
