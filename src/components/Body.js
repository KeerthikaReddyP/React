import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList]=useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9692624&lng=79.59263039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="input-btn"
          onClick={() =>setFilteredList(listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))}
        >
          Search
        </button>
        <button
          className="input-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
        >
          Filter high rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
