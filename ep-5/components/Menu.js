import { useParams } from "react-router-dom";

const Menu = () => {
  const { name } = useParams();
  return (
    <>
      <h1>{name}</h1>
      <h2>Here are the menu items of the restaurant</h2>
    </>
  );
};

export default Menu;
