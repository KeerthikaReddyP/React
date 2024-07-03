import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
    
    const [showItems,setShowItems]=useState(false);
  
  function clickHandler(){
    setShowItems(!showItems);
  }
  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-between bg-gray-100 m-2 p-2 shadow-lg cursor-pointer" onClick={clickHandler}>
        <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
        <span>{showItems?"🔼":"🔽"}</span>
      </div>

      {showItems && <ItemList items={data?.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
