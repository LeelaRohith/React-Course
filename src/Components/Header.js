import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Title = () => (
  <img
    className="h-24"
    alt="logo"
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
  ></img>
);
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title></Title>
      <button className="p-2 bg-green-300 m-5" onClick={() => handleAddItem()}>
        Add Item
      </button>
      <div className="">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <h3 className="p-10 font-bold text-red-500">{user.name}</h3>

      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};
export default Header;
