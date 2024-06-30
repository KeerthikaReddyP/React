import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="m-2 p-2 w-60 hover:border border-solid border-black">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <div className="font-bold p-2">{name}</div>
      <div className="p-2">{cuisines.join(", ")}</div>
      <div className="flex justify-between p-2">
        <div><span className="text-white bg-green-700 px-1 pb-1">☆</span> {avgRating}</div>
        <div>{deliveryTime} minutes</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
