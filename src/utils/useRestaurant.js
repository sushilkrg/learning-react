import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {

    // https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=" +
        resId
    );
    const resData = await response.json();
    setRestaurants(resData?.data?.cards);
  }
  return restaurants;
};

export default useRestaurant;
