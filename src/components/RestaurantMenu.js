// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurants = useRestaurant(resId);
  const dispatch = useDispatch();

  const addFoodItem =(item)=> {
    dispatch(addItem(item));
    console.log(item?.card?.info?.id);
  };

  console.log(restaurants);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurants[0]?.card?.card?.info?.name}</h2>
        <img
          src={IMG_CDN + restaurants[0]?.card?.card?.info?.cloudinaryImageId}
          alt="img"
        />
        {/* <h3>{restaurants[0]?.card?.card?.info?.area}</h3> */}
        <h3>{restaurants[0]?.card?.card?.info?.city}</h3>
        <p>{restaurants[0]?.card?.card?.info?.cuisines.join(", ")}</p>
        <h3>{restaurants[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurants[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div className="recommended">
        <h1>Recommended</h1>
        <ul data-testid="menu">
          {/* Object.values  */}
          {(restaurants[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards).map(
            (item) => (
              <div className="menu-container">
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              <button onClick={() => addFoodItem(item)}>Add to cart</button>
              </div>
            )
            // Recommended items Components call
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
