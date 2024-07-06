import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">Cart</h1>
      <button className="m-2 py-2 px-4 text-white text-sm font-bold bg-green-500 rounded-lg">Clear Cart</button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
