import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";

import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.find(
        (item) => item.productId === action.payload.id,
      );

      // ✅ มีสินค้าอยู่แล้ว → เพิ่มจำนวน
      if (existingItem) {
        return state.map((item) =>
          item.productId === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // ✅ ยังไม่มี → เพิ่มสินค้าใหม่
      return [
        ...state,
        {
          ...action.payload,
          productId: action.payload.id,
          quantity: 1,
          stock: action.payload.quantity,
        },
      ];
    }

    case REMOVE_FROM_CART:
      return state.filter((item) => item.productId !== action.payload);

    case INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload) {
          if (item.quantity >= item.stock) {
            return item; // ❌ เกิน stock ไม่ให้เพิ่ม
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

    case DECREASE_QUANTITY:
      return state.map((item) =>
        item.productId === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );

    default:
      return state;
  }
};

export default cartReducer;
