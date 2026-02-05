import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/carts/action";
// นำเข้า action สำหรับจัดการสต็อกฝั่ง product
import { removeQuanity, addQuantity } from "../redux/products/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // ดึงข้อมูลสินค้าทั้งหมดจาก store เพื่อเช็คสต็อก
  const products = useSelector((state) => state.products);
  const productInStock = products.find((p) => p.id === item.productId);

  // เช็คว่าสต็อกหมดหรือยัง
  const isOutOfStock = productInStock ? productInStock.quantity <= 0 : true;

  // 1. ฟังก์ชันเพิ่มจำนวน (บวกในตะกร้า / ลบในสต็อก)
  const handleIncrease = () => {
    if (!isOutOfStock) {
      dispatch(increaseQuantity(item.id));
      dispatch(removeQuanity(item.productId)); // ลดสต็อกไป 1
    } else {
      alert("Out of stock!");
    }
  };

  // 2. ฟังก์ชันลดจำนวน (ลบในตะกร้า / คืนในสต็อก)
  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
      // คืนสต็อกกลับไป 1 (ใช้ addQuantity ที่คุณมีใน productReducer)
      dispatch(addQuantity(item.productId, 1));
    }
  };

  // 3. ฟังก์ชันลบสินค้าออก (ลบแถว / คืนสต็อกทั้งหมดของรายการนั้น)
  const handleRemove = () => {
    // คืนสต็อกกลับไปตามจำนวน (quantity) ที่เคยหยิบใส่ตะกร้าไว้
    dispatch(addQuantity(item.productId, item.quantity));
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="bg-white text-gray-800 rounded-lg p-4 flex items-center gap-4 shadow-sm">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md bg-gray-100"
      />

      <div className="flex-1">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">Price: ${item.price}</p>
        <p className="text-sm text-gray-500">
          Category: <span className="text-blue-500">{item.category}</span>
        </p>
        <p className="text-xs text-orange-500 mt-1">
          {productInStock
            ? `Available: ${productInStock.quantity}`
            : "Out of Stock"}
        </p>
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="flex items-center border border-gray-200 rounded overflow-hidden">
          <button
            onClick={handleDecrease} // ใช้ handleDecrease
            disabled={item.quantity <= 1}
            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-gray-400 disabled:opacity-30 transition-colors"
          >
            &minus;
          </button>
          <span className="px-4 py-1 text-sm font-medium border-x border-gray-100">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease} // ใช้ handleIncrease
            disabled={isOutOfStock}
            className={`px-3 py-1 bg-gray-50 text-gray-400 transition-colors ${
              isOutOfStock
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            &#43;
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-400">
            ${(item.price * item.quantity).toLocaleString()}
          </span>
          <button
            onClick={handleRemove} // ใช้ handleRemove
            className="text-gray-400 hover:text-red-500 text-xl leading-none"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
