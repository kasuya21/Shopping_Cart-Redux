import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pages/pagereRucer";
import { Provider } from "react-redux";
import productReducer from "./products/productReducer.js";

export const store = configureStore({
    reducer:{
        pages : pageReducer,
        products : productReducer
    },
    devTools: true
})