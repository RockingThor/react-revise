import { useState } from "react";
import "./App.css";
import useFetch, { API_URL } from "./helpers/useFetch";
import BookCard from "./components/BookCard";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { data, hasMore, loading } = useFetch(createUrl(), query);
  const endElement = useRef();
  function createUrl() {
    console.log("create url called");
    let params = { q: query, pageNumber };
    const queryString = new URLSearchParams(params).toString();
    const urlWithParams = `${API_URL}?${queryString}`;
    return urlWithParams;
  }
  useEffect(() => {}, []);
  return (
    <>
      <div className="header__section">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="books__section">
        {data.map((item, i) => {
          if (i === data.length - 1) {
            return (
              <div className="element" key={i} ref={endElement}>
                <BookCard data={item} />
              </div>
            );
          }
          return (
            <div className="element" key={i}>
              {" "}
              <BookCard data={item} />
            </div>
          );
        })}
        {loading && <div className="loading__section">Loading...</div>}
      </div>
    </>
  );
}

export default App;
