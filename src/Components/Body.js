import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [allrestaurants, setAllRestaurants] = useState([{ name: "hi" }]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([
    { name: "hi" },
  ]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=15.7613156&lng=78.0609138"
      );

      const json = await data.json();
      console.log(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurants(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  }
  const isOnline = useOnline();
  if (!isOnline)
    return <h1>Oops something went wrong,check your internet connection</h1>;
  if (!allrestaurants) return null;
  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-pink-50 p-5 my-5">
        <input
          type="text"
          className="search-input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-600 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allrestaurants);

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
