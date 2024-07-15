const NavBar = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
