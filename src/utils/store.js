import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({ reducer: { cart: cartSlice } });
export default store;

/**
 * Create Store
 *    -configureStore() - RTK
 *
 * Provide my store to app
 *    -<Provider store={store}/> - react-redux
 *
 *Create Slice
      -
 */
