import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/Nav";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <NavBar />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
