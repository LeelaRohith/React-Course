export function filterData(searchInput, allrestaurants) {
  const filteredData = allrestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredData;
}
