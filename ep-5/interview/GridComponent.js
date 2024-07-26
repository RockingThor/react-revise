import { useEffect, useState } from "react";

const GridComponent = () => {
  const [boxPosition, setBoxPosition] = useState([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]);
  const [clickTracker, setClickTracker] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const handleBoxClicked = (i, j) => {
    if (boxPosition[i][j] === 0) return;
    let newBoxPosition = boxPosition.map((row) => [...row]);
    newBoxPosition[i][j] === 1
      ? (newBoxPosition[i][j] = 2)
      : (newBoxPosition[i][j] = 1);

    setBoxPosition(newBoxPosition);
    let newClickTracker = clickTracker.map((row) => [...row]);
    newClickTracker.push([i, j]);
    setClickTracker(newClickTracker);
  };

  useEffect(() => {
    if (clickTracker.length === 8) {
      let j = 7;
      const interval = setInterval(() => {
        if (j < 0) {
          clearInterval(interval);
          setClickTracker([]);
          return;
        }
        let newBoxPosition = boxPosition.map((item) => [...item]);
        console.log(newBoxPosition);
        newBoxPosition[clickTracker[j][0]][clickTracker[j][1]] = 1;
        setBoxPosition(newBoxPosition);
        j--;
      }, 500);
    }
  }, [clickTracker]);

  return (
    <>
      <div className="grid__outer__box">
        {boxPosition.map((item, i) => (
          <div className="grid__row" key={i}>
            {item.map((box, j) => (
              <div
                className={`grid__box ${
                  box === 1 ? "background__grey" : "background__green"
                }`}
                key={j}
                onClick={() => {
                  handleBoxClicked(i, j);
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GridComponent;
