const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-between bg-gray-100 m-2 p-2 shadow-lg" >
        <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
