import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
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

  if (onlineStatus === false) return <h1>Here's the dino game.Please play.</h1>;

  if(!listOfRestaurants) return null;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="p-1 m-4 flex justify-center">
        <input
          className="border border-black m-2 p-1"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="m-1 px-3 bg-green-200 rounded-md hover:bg-green-300"
          onClick={() =>
            setFilteredList(
              listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            )
          }
        >
          Search
        </button>

        <button
          className="m-1 px-3 bg-green-200 rounded-lg hover:bg-green-300"
          onClick={() => {
            setFilteredList(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
        >
          Filter high rated restaurants
        </button>

        <label>
          <input
            className="border border-black m-2 p-1"
            placeholder="Enter user name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="flex flex-wrap m-2 p-2 justify-center">
        {filteredList.length == 0 ? (
          <h1>No results found</h1>
        ) : (
          filteredList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardWithOpen resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
