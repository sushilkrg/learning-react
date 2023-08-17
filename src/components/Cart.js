import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };


  return (
    <div className="cart">
      <h1>Cart item - {cartItems.length}</h1>
      <button onClick={()=> handleClearCart()}>Clear Cart</button>
      <div className="cart-items">
        {cartItems.map((item) => (
            <FoodItem key={item?.card?.info?.id} item={item?.card?.info}/>
        ))}
      </div>
    </div>
  );
};

export default Cart;
