import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex}) => {
  
  function clickHandler(){
    setShowIndex();
  }
  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-between bg-gray-100 m-2 p-2 shadow-lg cursor-pointer" onClick={clickHandler}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>{showItems?"🔼":"🔽"}</span>
      </div>

      {showItems && <ItemList items={data?.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
