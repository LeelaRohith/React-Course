//API : https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.7613156&lng=78.0609138&restaurantId=680757

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { useRestaurant } from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState({});
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  // console.log(restaurant);
  return (
    <div>
      <div>
        <h1>Restaurant Id :{restaurant?.id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.areaName}</h2>
        <h2>{restaurant?.city}</h2>
        <h2>{restaurant?.avgRating}</h2>
        {restaurant?.cuisines.map((item, index) => {
          return (
            <div>
              <h3 key={index}>{item}</h3>
              <button
                className="p-2 bg-green-300 m-5"
                onClick={() => handleAddItem(item)}
              >
                Add Item
              </button>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
export default RestaurantMenu;
