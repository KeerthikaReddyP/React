import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="m-2 p-2 w-60 h-96 hover:border border-solid border-black">
      <img className="w-full h-48 object-cover" src={CDN_URL + cloudinaryImageId} />
      <div className="font-bold p-2">{name}</div>
      <div className="p-2">{cuisines.join(", ")}</div>
      <div className="flex justify-between p-2">
        <div className="text-white bg-green-400 px-1 text-sm">☆ {avgRating}</div>
        <div>{deliveryTime} minutes</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
