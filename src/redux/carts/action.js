import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes.js";
export const addtocart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removefromcart = (productid) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productid,
  };
};
export const increaseQuantity = (productid) => {
  return {
    type: INCREASE_QUANTITY,
    payload: productid,
  };
};
export const decreaseQuantity = (productid) => {
  return {
    type: DECREASE_QUANTITY,
    payload: productid,
  };
};