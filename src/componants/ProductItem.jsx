import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../redux/carts/action";
import { removeQuanity } from "../redux/products/action";
import { ShoppingCart } from "lucide-react"; // เพิ่มไอคอนเพื่อความสวยงาม (ถ้าไม่มีลบออกได้)

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const { id, name, imageUrl, category, quantity, price } = product;

  const handleAddtocart = () => {
    dispatch(addtocart(product));
    dispatch(removeQuanity(id));
  };

  return (
    // CARD CONTAINER: พื้นขาว + ขอบชมพูอ่อน + เงาสีม่วง
    <div className="group bg-white rounded-3xl overflow-hidden border border-pink-100 shadow-xl shadow-purple-100/50 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      {/* Product Image Area */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={
            imageUrl ||
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
          }
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badge: Glassmorphism */}
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-pink-500 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {category}
        </span>

        {/* Overlay ตอน Hover (Optional) */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-2">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
            {name}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Price & Quantity Info */}
        <div className="mt-6 pt-4 border-t border-pink-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
              Available:{" "}
              <span
                className={quantity === 0 ? "text-red-400" : "text-gray-600"}
              >
                {quantity}
              </span>
            </span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              ${price}
            </span>
          </div>

          {/* Button: Gradient Pastel */}
          <button
            onClick={handleAddtocart}
            disabled={quantity === 0}
            className="w-full relative overflow-hidden group/btn bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-pink-300/40 active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              {quantity === 0 ? "Out of Stock" : "Add to Cart"}
              {quantity > 0 && <ShoppingCart size={18} />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
