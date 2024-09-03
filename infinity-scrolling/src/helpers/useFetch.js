import { useState, useEffect } from "react";
import debouncedFunction from "./debouncedFunction";

export const API_URL = "http://openlibrary.org/search.json";

function useFetch(urlWithParams, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchBooks = () => {
    if (query === "") return;
    setLoading(true);
    fetch(urlWithParams)
      .then((response) =>
        response.json().then((books) => {
          setData((prev) => [...prev, ...books.docs]);
          setLoading(false);
          console.log(books.docs);
          if (data.length >= books.numFound) {
            setHasMore(false);
          }
        })
      )
      .catch((err) => console.log(err));
  };
  console.log("Called");
  const debouncedFetchBooks = debouncedFunction(2000, fetchBooks);

  useEffect(() => {
    if (hasMore) {
      debouncedFetchBooks();
    }
  }, [urlWithParams]);

  return { data, loading, hasMore };
}

export default useFetch;
