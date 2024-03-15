import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile";
//import Instamart from "./Components/Instamart";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/userContext";
// const h1 = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Hello Everyone from react"
// );
// const h2 = React.createElement("h1", { id: "title", key: "h2" }, "Welcome all");
// console.log(h2);
// const container = React.createElement("div", { id: "container" }, [h1, h2]);
// const heading = (
//   <div>
//     <h1>Namaste React</h1>
//   </div>
// );
// const FunctionalComponent = () => (
//   <div>
//     {heading}
//     <h2>This is a h1 tag</h2>
//     <h2>This is h2 tag</h2>
//   </div>
// );
import { Provider } from "react-redux";
import store from "./utils/store";
import { Cart } from "./Components/Cart";
const Instamart = lazy(() => import("./Components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({ name: "hello", email: "ghjigihg" });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout></AppLayout>}></Route>
//         <Route path="/about" element={<About />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
root.render(<RouterProvider router={AppRouter} />);
