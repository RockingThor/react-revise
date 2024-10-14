import { useRef } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useEffect } from "react";
import { useState } from "react";

const Pokemon = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { data, isDataAvailable, loading, error, setCallNext } = useFetchData();

  const lastItemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
    const prevLastItemRef = lastItemRef.current;
    return () => {
      if (prevLastItemRef) observer.unobserve(prevLastItemRef);
    };
  }, [isIntersecting, data]);

  useEffect(() => {
    if (isIntersecting) {
      setIsIntersecting(false);
    }
  }, [data]);

  useEffect(() => {
    if (!isIntersecting) return;
    setCallNext((item) => item + 1);
  }, [isIntersecting, setCallNext]);

  useEffect(() => {}, []);
  return (
    <div>
      <div className="poke__container">
        {data.map((item, i) => (
          <div
            className="poke"
            key={item.url}
            ref={i === data.length - 1 ? lastItemRef : null}
          >
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      {loading && (
        <div className="loading__container">
          <h2>Loading...</h2>
        </div>
      )}
      {!isDataAvailable && (
        <div className="not__available__container">
          <h2>No more data available</h2>
        </div>
      )}
      {error && (
        <div className="error__container">
          <h2>Oops!! Some error occured</h2>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
