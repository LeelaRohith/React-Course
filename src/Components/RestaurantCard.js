import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // console.log(restaurant.info);
  return (
    <div className="w-[200px] m-2 p-2 bg-pink-50 shadow-lg ">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
