/* eslint-disable react/prop-types */
const Question = ({ index, question, handleOptionClick }) => {
  return (
    <div className="question">
      <h1 className="heading">{question.question}</h1>
      <div className="options__container">
        {question.answerOptions.map((item) => (
          <button
            key={item.text}
            onClick={() => {
              handleOptionClick(item.isCorrect);
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
      <p>{`You are attempting ${index + 1} out of 10 questions`}</p>
    </div>
  );
};

export default Question;
