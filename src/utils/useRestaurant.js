import { useState, useEffect } from "react";

export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantsInfo();
  }, []);
  async function getRestaurantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.7613156&lng=78.0609138&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
  }
  return restaurant;
};
