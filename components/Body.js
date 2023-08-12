// import { GET_RES_API_URL } from "../config";
import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";

function filterRestaurants(searchText, allRestaurants) {
  const data = allRestaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  console.log(data);
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(allRestaurants);

  useEffect(() => {
    getRestaurants();
    // console.log("useEffect");
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log(json);
      // const data = res_data?.data?.cards[2]?.data?.data?.cards;
      setAllRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setIsLoaded(true);
      // console.log(allRestaurants);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search your result..."
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchedData = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(searchedData);
          }}
        >
          Search
        </button>
      </div>

      {!isLoaded ? (
        <Shimmer />
      ) : (
        <div>
          <p className="restaurant-count">
            {filteredRestaurants.length} restaurants
          </p>
          <div className="restaurant-list">
            {filteredRestaurants.length == 0 ? (
              <p className="no-restauant-found-msg">No restaurant found...</p>
            ) : (
              filteredRestaurants.map((restaurant) => {
                return (
                  <RestaurantCard
                    {...restaurant?.info}
                    key={restaurant?.info?.id}
                  />
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
