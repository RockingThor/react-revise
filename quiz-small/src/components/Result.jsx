/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { questions } from "../constants/questions";

const Result = ({ result, handleReset }) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    let count = 0;
    result.forEach((item) => {
      if (item) count++;
    });
    setScore(count);
  }, []);
  return (
    <div className="result">
      <h1>{`Yay!! You have scored ${score} out of 10`}</h1>
      <h3>
        To retry{" "}
        <span
          onClick={() => {
            handleReset();
          }}
        >
          click here
        </span>
      </h3>
      <div className="info">
        {questions.map((item, index) => (
          <p
            key={item.question}
            className={`${result[index] ? "right" : "wrong"}`}
          >
            {item.question}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Result;
