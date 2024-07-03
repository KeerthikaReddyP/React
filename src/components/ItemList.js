import { RESTAURANT_MENU_ITEM_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => ( 
        <div key={item.card.info.id} className="flex justify-between my-2 p-4 border-gray-300 border-b-2">
            <div className="flex flex-col text-left w-9/12">
                <span className="text-lg">{item.card.info.name}</span>
                <span className="text-lg">₹ {item.card.info.price/100}</span>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 flex flex-col items-center">
                <img className="w-16 h-14" src={RESTAURANT_MENU_ITEM_IMAGE_URL+item.card.info.imageId}/>
                <button className="px-4 bg-white text-green-500 font-bold rounded-lg shadow-lg">ADD</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
