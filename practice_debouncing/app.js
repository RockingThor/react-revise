import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";

const Body = () => {
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState([]);

  const callApi = async () => {
    setLoading(true);
    const response = await fetch(
      `https://ws-public.interpol.int/notices/v1/red?forename=${value}&nationality=DE&ageMax=120&ageMin=18&sexId=F&arrestWarrantCountryId=DE&page=1&resultPerPage=200`
    );
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  const testRender = () => {
    console.log(Math.random());
  };

  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedCallApi = useMemo(() => debounce(callApi, 1000), []);

  return (
    <>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          debouncedCallApi();
          testRender;
        }}
      />
      <div>
        {loading && <p>Loading...</p>}
        {result &&
          result?._embedded?.notices.map((element) => {
            return <p key={element.entity_id}>{element.name}</p>;
          })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
