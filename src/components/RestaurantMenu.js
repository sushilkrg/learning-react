import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {

    // https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=" + resId
    );
    const resData = await response.json();
    setRestaurants(resData?.data?.cards);
  }
  console.log(restaurants);

  return (!restaurants)?<Shimmer/> : (
    <div className="restaurant-menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurants[0]?.card?.card?.info?.name}</h2>
        <img src={IMG_CDN + restaurants[0]?.card?.card?.info?.cloudinaryImageId} alt="img" />
        {/* <h3>{restaurants[0]?.card?.card?.info?.area}</h3> */}
        <h3>{restaurants[0]?.card?.card?.info?.city}</h3>
        <p>{restaurants[0]?.card?.card?.info?.cuisines.join(", ")}</p>
        <h3>{restaurants[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{restaurants[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div className="recommended">
        <h1>Recommended</h1>
        <ul>
          {/* Object.values  */}
          {(restaurants[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards).map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            // Recommended items Components call 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;