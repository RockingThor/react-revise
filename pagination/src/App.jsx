import { useEffect, useState } from "react";
import "./App.css";

const API = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [data, setData] = useState([]);
  const [dataToRender, setDataToRender] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [toShowCount, setToShowCount] = useState(8); //Either it will be 6 or 7 or 8
  useEffect(() => {
    fetch(API).then((data) =>
      data.json().then((data) => {
        setData(data);
        setDataToRender(data.slice(0, toShowCount));
      })
    );
  }, []);

  useEffect(() => {
    let numOfPages = Math.ceil(data.length / toShowCount);
    let tempPages = [];
    for (let i = 1; i <= numOfPages; i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
    setDataToRender(data.slice((page - 1) * toShowCount, page * toShowCount));
  }, [page, data, toShowCount]);

  return (
    <>
      <div className="container">
        <div className="header">
          <h2 className="header__title">Content Pagination</h2>
          <div className="select__element">
            <label htmlFor="select-content-per-page">
              Select number of content:
            </label>
            <select
              name="options"
              id="option-select"
              onChange={(e) => setToShowCount(Number(e.target.value))}
            >
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className="display__container">
          {dataToRender.map((item) => (
            <div key={item.id} className="content">
              <h1 className="content__header">{item?.title}</h1>
              <p className="content__body">{item?.body}</p>
            </div>
          ))}
        </div>
        <div className="pagination__container">
          <div className="options">
            {pages.map((item) => (
              <div
                key={item}
                className={`options__box ${item === page ? "active" : ""}`}
                onClick={() => setPage(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
