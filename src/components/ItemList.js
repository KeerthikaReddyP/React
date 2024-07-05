import { RESTAURANT_MENU_ITEM_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  const handleAddItem=()=>{
    console.log("Item added");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between my-2 p-4 border-gray-300 border-b-2"
        >
          <div className="flex flex-col text-left w-9/12">
            <span className="font-semibold text-md">{item.card.info.name}</span>
            <span className="font-semibold text-md">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 flex flex-col place-items-end">
            {item.card.info.imageId && (
              <img
                className="w-20 h-16"
                src={RESTAURANT_MENU_ITEM_IMAGE_URL + item.card.info.imageId}
              />
            )}
            <button
              className="px-4 bg-white text-green-600 font-bold rounded-lg shadow-lg"
              onClick={handleAddItem}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
