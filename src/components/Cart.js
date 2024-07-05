import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1>Cart</h1>
      <ItemList items={cartItems}/>
    </div>
  );
};

export default Cart;
