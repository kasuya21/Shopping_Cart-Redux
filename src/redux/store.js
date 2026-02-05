import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pages/pageReducer";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducer";

export const store = configureStore({
  reducer: {
    pages: pageReducer,
    products: productReducer,
    carts: cartReducer,
  },
  devTools: true,
});
