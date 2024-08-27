import { useEffect, useState } from "react";

const InsertionSort = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [operationCount, setOperationCount] = useState(0);
  const [activeKey, setActiveKey] = useState(-1);
  const generateArray = () => {
    setOperationCount(0);
    const newArr = [];
    for (let i = 0; i < 20; i++) {
      newArr.push(Math.floor(Math.random() * 100) + 5);
    }
    setArray(newArr);
  };
  const decreaseSpeed = () => {
    setSpeed((speed) => speed + 100);
  };

  const sleep = (wait) => {
    setOperationCount((count) => count + 1);
    return new Promise((resolve) => setTimeout(resolve, wait));
  };

  useEffect(() => {
    generateArray();
  }, []);
  const insertionSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      setActiveKey(i);
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        await sleep(speed);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await sleep(speed);
    }
    setActiveKey(-1);
    setIsSorting(false);
  };
  return (
    <div className="main-container">
      <div className="header">
        <h1 className="title">Insertion Sort Visualizer</h1>
        <div className="header-buttons">
          <button className="" onClick={generateArray} disabled={isSorting}>
            Generate New Array
          </button>
          <button className="" onClick={decreaseSpeed} disabled={isSorting}>
            Decrease Speed by 100ms
          </button>
          <button className="" onClick={insertionSort} disabled={isSorting}>
            Start Sorting
          </button>
        </div>
      </div>
      <div className="array-container">
        {array.map((value, i) => (
          <div
            key={i}
            className={` ${activeKey === i ? "active" : "element-bar"}`}
            style={{ height: `${value * 3}px` }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="info">
        <p>Current delay: {speed}ms</p>
        <p>Total operations: {operationCount}</p>
      </div>
    </div>
  );
};

export default InsertionSort;
