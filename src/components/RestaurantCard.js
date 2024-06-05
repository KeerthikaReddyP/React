import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <div className="res-name">{name}</div>
      <div className="res-cuisines">{cuisines.join(", ")}</div>
      <div className="res-details">
        <div>☆ {avgRating}</div>
        <div>{deliveryTime} minutes</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
