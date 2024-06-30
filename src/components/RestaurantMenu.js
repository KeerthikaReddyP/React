import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
    <div className="flex flex-col items-center m-2 p-4">
      <h1 className="font-bold text-xl">{name}</h1>
      <h3 className="m-2 p-2 text-sm">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul className="overflow-auto">
        {itemCards.map((item) => (
          <li className="flex m-2 p-4 justify-between bg-gray-100" key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
            <div><button className="m-2 px-6 py-2 font-bold text-green-600 bg-white rounded-md">Add</button></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
