import CDN_URL from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData.info.sla;

  const {loggedInUser}=useContext(UserContext);

  return (
    <div className="m-2 p-2 w-60 h-96 hover:border border-solid border-black">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-bold p-2">{name}</div>
      <div className="p-2">{cuisines.join(", ")}</div>
      <div className="flex justify-between p-2">
        <div className="text-white bg-green-400 px-1 text-sm">
          ☆ {avgRating}
        </div>
        <div>{deliveryTime} minutes</div>
      </div>
      <span>{loggedInUser}</span>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 ml-3 px-2 bg-gray-200 text-black">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
