import { useState, useEffect } from "react";
import Card from "./Card";

const Body = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
  }, []);

  return (
    <>
      {filteredData.map((item) => (
        <div className="card">
          {" "}
          <Card key={item.info.id} info={item.info} />
        </div>
      ))}
    </>
  );
};

export default Body;
