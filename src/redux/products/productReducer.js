import { ADD_PRODUCT, REMOVE_QUANTITY, ADD_QUANTITY } from "./actionTypes.js";
import initialState from "./initialState.js";

const nextId = (items) => {
  return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
          price: Number(action.payload.price),
          quantity: Number(action.payload.quantity),
        },
      ];

    case ADD_QUANTITY:
      return state.map(
        (product) =>
          product.id === action.payload.productId
            ? {
                ...product,
                quantity: product.quantity + Number(action.payload.quantity),
              }
            : product, // ⭐ สำคัญมาก
      );

    case REMOVE_QUANTITY:
      return state.map((product) =>
        product.id === action.payload // action.payload คือ productId ที่ส่งมา
          ? {
              ...product,
              // ลดลงทีละ 1 ชิ้นตรงๆ เลยครับ
              quantity: product.quantity > 0 ? product.quantity - 1 : 0,
            }
          : product,
      );

    default:
      return state; // ⭐ ห้ามลืมเด็ดขาด
  }
};

export default productReducer;
