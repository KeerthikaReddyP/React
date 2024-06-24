import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const jsonData = await data.json();

    setResInfo(jsonData);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards != undefined
      ? resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card
      : resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.categories[0];

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
