import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const itemCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col text-center m-2 p-4">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3 className="m-2 p-2 text-sm">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <div>
        {itemCategories.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
      </div>
    </div>
  );
};

export default RestaurantMenu;
