export const filterRestaurants = (searchText, allRestaurants) => {
  const data = allRestaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  console.log(data);
  return data;
};
