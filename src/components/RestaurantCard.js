import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="m-2 p-2 w-60 h-[400px] hover:border border-solid border-black">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-bold p-2">{name}</div>
      <div className="flex flex-col justify-between" style={{height: "110px"}}>
        <div className="p-2">{cuisines.join(", ")}</div>
        <div className="flex justify-between p-2">
          <div className="text-white bg-green-400 px-1 text-sm">
            ☆ {avgRating}
          </div>
          <div>{deliveryTime} minutes</div>
        </div>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 ml-3 px-2 bg-gray-200 text-black">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
