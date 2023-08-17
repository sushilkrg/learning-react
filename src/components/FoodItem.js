import { useDispatch } from "react-redux";
import { IMG_CDN } from "../../config";
import { removeItem } from "../utils/CartSlice";

const FoodItem = ( {item} ) => {
  
  const {id,name, description, imageId, price} = item;
  const dispatch = useDispatch();
  // const handleRemoveItem = (id) => {
  //   dispatch(removeItem(id));
  // };

  return (
    <div className="food-item-container">
      <img src={IMG_CDN + imageId} alt="img" />
      <div className="food-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="price-remove-container">
          <h4>Rs. {price / 100}</h4>
          <button onClick={() => dispatch(removeItem(id))}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
