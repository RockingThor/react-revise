import { Link } from "react-router-dom";
import useInternetStatus from "../hooks/useInternetStatus";
const NavBar = () => {
  const isOnline = useInternetStatus();
  return (
    <div className="navBar">
      <div className="left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="right">
        <ul>
          <li>Connectivity: {isOnline ? "✅" : "❌"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
