import React from "react";
import { ArrowLeft, ShoppingBag, CreditCard } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../componants/CartItem";
import {
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../redux/carts/actionTypes";

const MyCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts);

  // --- Logic เดิมของคุณ ---
  const updateQuantity = (productId, type) => {
    dispatch({
      type: type === "inc" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: productId,
    });
  };

  const removeItem = (productId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    // MAIN CONTAINER: เปลี่ยนพื้นหลังเป็น Gradient ขาว-ชมพู-ม่วงอ่อน
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-700 font-sans relative overflow-hidden">
      {/* Background Decor (เปลี่ยนแสงฟุ้งเป็นสีพาสเทล) */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto p-6 lg:p-10 relative z-10">
        {/* Header */}
        <header className="flex items-center gap-4 mb-8">
          <button
            onClick={() => dispatch({ type: "HOME" })}
            className="btn btn-circle btn-ghost btn-sm text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            My Cart
          </h1>
          {/* Badge: พื้นขาว ขอบชมพู */}
          <span className="badge badge-lg border-pink-200 bg-white text-pink-400 ml-auto shadow-sm">
            {cartItems.length} items
          </span>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT: List Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              // Empty State: สีจางๆ ดูสะอาด
              <div className="flex flex-col items-center justify-center py-20 bg-white/60 rounded-3xl border-2 border-dashed border-pink-100">
                <ShoppingBag size={64} className="text-pink-200 mb-4" />
                <p className="text-xl text-gray-400 font-medium">
                  Your cart is empty
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.productId}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))
            )}
          </div>

          {/* RIGHT: Summary (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Card Summary: พื้นกระจกขาว เงาสีม่วง */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-2xl shadow-purple-200/50">
                <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <CreditCard size={20} className="text-pink-400" />
                  Order Summary
                </h2>

                <div className="space-y-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-gray-800 font-medium">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-gray-800 font-medium">
                      ${shipping}
                    </span>
                  </div>
                </div>

                <div className="py-6">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-lg font-semibold text-gray-800">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                        ${total.toLocaleString()}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">
                        USD, including VAT
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button: ไล่สี Pastel ชมพู->ม่วง */}
                <button className="btn btn-block bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 border-none text-white shadow-lg shadow-pink-300/50 normal-case text-lg h-12 rounded-xl">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
