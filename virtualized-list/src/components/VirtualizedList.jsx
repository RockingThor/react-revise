import { useCallback, useEffect, useRef, useState } from "react";
import { generateList } from "../helper/generateList";

function VirtualizedList() {
  const [list, setList] = useState([]);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
    remSize: 0,
  });
  const [dataToRender, setDataToRender] = useState([]);
  const [contentToIgnore, setContentToIgnore] = useState(0);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  // Memoize the list generation function to prevent unnecessary recalculations
  const getList = useCallback((size) => generateList(size), []);

  useEffect(() => {
    setList(getList(100000));
  }, [getList]);

  useEffect(() => {
    const contentPerPage = Math.ceil(
      containerDimensions.height / containerDimensions.remSize
    );
    setDataToRender(list.slice(0, contentPerPage));
  }, [list, containerDimensions.height, containerDimensions.remSize]);

  useEffect(() => {
    const fetchContainerDimension = () => {
      const fontSize = getComputedStyle(document.documentElement).fontSize;
      // console.log(fontSize);
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        // console.log(height, width, height / list.length);
        setContainerDimensions({
          width,
          height,
          remSize: parseFloat(fontSize),
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
    const contentToIgnore = Math.min(
      Math.floor(e.target.scrollTop / containerDimensions.remSize),
      list.length
    );
    setContentToIgnore(contentToIgnore);
    // console.log(contentToIgnore);

    const endIndex = Math.min(contentPerPage + contentToIgnore, list.length);
    const startIndex = Math.max(0, endIndex - contentPerPage);
    setDataToRender(list.slice(startIndex, endIndex));
    // console.log(startIndex, endIndex);
    // console.log(e.target.scrollTop);
  };

  return (
    <div className="container">
      <div
        className="list-container"
        onScroll={scrollHandler}
        ref={containerRef}
      >
        <ul
          className="unordered-list"
          ref={listRef}
          style={{
            marginTop: `${contentToIgnore * containerDimensions.remSize}px`,
            marginBottom: `${
              (list.length - contentToIgnore) * containerDimensions.remSize
            }px`,
          }}
        >
          {dataToRender.map((item, i) => (
            <li key={i} className="list-item">
              {item.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VirtualizedList;
