import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { generateList } from "./helper/generateList";

function App() {
  const [list, setList] = useState([]);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
    remSize: 0,
  });
  const [dataToREnder, setDataToRender] = useState([]);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const getList = useCallback((size) => {
    return generateList(size);
  });

  useEffect(() => {
    setList(getList(100));
  }, []);

  useEffect(() => {
    const contentPerPage = Math.ceil(
      containerDimensions.height / containerDimensions.remSize
    );
    setDataToRender(list.slice(0, contentPerPage));
  }, [list, containerDimensions.height, containerDimensions.remSize]);

  useEffect(() => {
    const fetchContainerDimension = () => {
      const fontSize = getComputedStyle(document.documentElement).fontSize;
      console.log(fontSize);
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        console.log(height, width, height / list.length);
        setContainerDimensions({
          width,
          height,
          remSize: Number(fontSize.split("px")[0]),
        });
      }
    };
    fetchContainerDimension();
    window.addEventListener("resize", fetchContainerDimension);
    return () => window.removeEventListener("resize", fetchContainerDimension);
  }, []);

  const scrollHandler = (e) => {
    const contentPerPage = Math.ceil(
      containerDimensions.height / containerDimensions.remSize
    );
    const contentToIgnore = Math.floor(
      e.target.scrollTop / containerDimensions.remSize
    );
    let endIndex = Math.min(contentPerPage + contentToIgnore, list.length);
    let startIndex = Math.max(0, endIndex - contentPerPage);
    setDataToRender(list.slice(startIndex, endIndex));
    // console.log(startIndex, endIndex);
    // console.log(e.target.scrollTop);
  };

  return (
    <>
      <div className="container">
        <div
          className="list-container"
          onScroll={scrollHandler}
          ref={containerRef}
        >
          <ul className="unordered-list" ref={listRef}>
            {dataToREnder.map((item, i) => (
              <li
                key={i}
                className="list-item"
                style={{
                  height: `${containerDimensions.remSize}px`,
                  top: `${i * containerDimensions.remSize}px`,
                  width: "100%",
                  left: 0,
                }}
              >
                {item.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
