import { useState } from "react";
import "./App.css";

import { questions } from "./constants/questions";
import Question from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [start, setStart] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const [result, setResult] = useState([]);

  const handleOptionSubmit = (isTrue) => {
    setResult([...result, isTrue]);
    setCurIndex((cur) => cur + 1);
  };

  const handleReset = () => {
    setStart(false);
    setCurIndex(0);
    setResult([]);
  };

  if (!start) {
    return (
      <>
        <div className="start">
          <h1>Welcome to Quiz app</h1>
          <button
            onClick={() => {
              setStart(!start);
            }}
          >
            Start Quiz
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="nav">Quiz App</h1>
      {curIndex !== questions.length && (
        <>
          <div className="quiz__panel">
            <Question
              index={curIndex}
              question={questions[curIndex]}
              handleOptionClick={handleOptionSubmit}
            />
          </div>
        </>
      )}
      {curIndex === questions.length && (
        <>
          <Result result={result} handleReset={handleReset} />
        </>
      )}
    </>
  );
}

export default App;
