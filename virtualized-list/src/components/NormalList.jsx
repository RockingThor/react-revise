import { useCallback, useEffect, useState } from "react";
import { generateList } from "../helper/generateList";

function NormalList() {
  const [list, setList] = useState([]);

  const getList = useCallback((size) => generateList(size), []);

  useEffect(() => {
    setList(getList(1000));
  }, [getList]);

  return (
    <div className="container">
      <div className="list-container">
        <ul className="unordered-list">
          {list.map((item, i) => (
            <li key={i} className="list-item">
              {item.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NormalList;
