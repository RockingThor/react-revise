import { useState, useEffect } from "react";
import Card, { HigherOrderCard } from "./Card";
import { Link } from "react-router-dom";

const Body = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const CardWithLabel = HigherOrderCard(Card);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();

    setAllData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
    console.log(allData);
  }, []);

  return (
    <>
      {filteredData.map((item) => (
        <div className="card" key={item.info.id}>
          {" "}
          <Link to={`/restaurant/${item.info.name}`}>
            {item.info.isOpen ? (
              <CardWithLabel info={item.info} />
            ) : (
              <Card info={item.info} />
            )}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Body;
