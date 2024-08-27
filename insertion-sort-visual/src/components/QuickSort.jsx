import { useState, useEffect } from "react";
const QuickSort = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [operationCount, setOperationCount] = useState(0);
  const [pivoteKEy, setPivoteKey] = useState(-1);
  const [changeIndex, setChangeIndex] = useState([-1, -1]);
  const generateArray = () => {
    setOperationCount(0);
    setPivoteKey(-1);
    setChangeIndex([-1, -1]);
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
  async function partition(arr, low, high) {
    let pivot = low,
      i = low + 1,
      j = high;
    setPivoteKey(pivot);
    await sleep(speed);
    while (i <= j) {
      while (arr[i] <= arr[pivot] && i <= high) {
        i++;
      }
      while (arr[j] > arr[pivot]) {
        j--;
      }
      if (i < j) {
        setChangeIndex([i, j]);
        await sleep(speed * 5);
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await sleep(speed);
      }
    }
    setChangeIndex([pivot, j]);
    await sleep(speed * 5);
    [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
    setArray([...arr]);
    await sleep(speed);
    return j;
  }

  async function quickSortHelper(low, high, arr) {
    if (low < high) {
      let p = await partition(arr, low, high);
      setPivoteKey(p);
      await sleep(speed);
      await quickSortHelper(low, p - 1, arr);
      await quickSortHelper(p + 1, high, arr);
    }
  }

  async function quickSort() {
    setIsSorting(true);
    let arr = [...array];
    await quickSortHelper(0, arr.length - 1, arr);
    setIsSorting(false);
  }
  return (
    <div className="main-container">
      <div className="header">
        <h1 className="title">Quick Sort Visualizer</h1>
        <div className="header-buttons">
          <button className="" onClick={generateArray} disabled={isSorting}>
            Generate New Array
          </button>
          <button className="" onClick={decreaseSpeed} disabled={isSorting}>
            Decrease Speed by 100ms
          </button>
          <button className="" onClick={quickSort} disabled={isSorting}>
            Start Sorting
          </button>
        </div>
      </div>
      <div className="array-container">
        {array.map((value, i) => (
          <div
            key={i}
            className={` ${pivoteKEy === i ? "active" : "element-bar"} ${
              (changeIndex[0] === i || changeIndex[1] === i) && i !== pivoteKEy
                ? "change-index"
                : ""
            }`}
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

export default QuickSort;
