import React, { useState } from "react";
import ReactDOM from "react-dom";

let bodyVariable = 0,
  navBarVariable = 0;

const NavBar = () => {
  const [val, setVal] = useState(0);
  return (
    <div className="navBar">
      <div className="left">
        {navBarVariable++}
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          alt="logo"
          className="logo"
        />
      </div>

      <div className="right">
        {navBarVariable}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button
              onClick={() => {
                setVal(val + 1);
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Card = () => {
  return <div className="card"></div>;
};
const Body = () => {
  return (
    <>
      {" "}
      {bodyVariable++}
      <NavBar /> <p>{bodyVariable}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Body />);
