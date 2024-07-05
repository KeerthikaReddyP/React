import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

  return (
    <div className="text-center m-4 p-4">
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
