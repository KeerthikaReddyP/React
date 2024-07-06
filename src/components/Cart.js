import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="m-4 p-4">
          <h1 className="font-bold text-xl mb-2">Your cart is empty</h1>
          <h3 className="m-2">
            You can go to home page to view more restaurants
          </h3>
          <Link to={"/"}>
            <button className="bg-orange-400 text-white font-semibold m-4 p-2">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      ) : (
        <button
          className="m-2 py-2 px-4 text-white text-sm font-bold bg-green-500 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}

      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
