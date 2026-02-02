import React from "react";

const ProductItem = ({ product }) => {
  const { name, category, imageUrl, price, quantity } = product;
  
  return (
    <div className="max-w-xs bg-[#1e252e] text-white rounded-xl overflow-hidden shadow-lg font-sans">
      {/* Product Image Section */}
      <div className="relative">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"}
          alt={name}
          className="w-full h-48 object-cover opacity-80"
        />
        {/* Badge */}
        <span className="absolute top-3 right-3 bg-[#e843b0] text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-100">{name}</h2>

        <p className="text-sm text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-sm text-gray-400">Available: {quantity}</span>
          <span className="text-lg font-bold text-gray-300">${price}</span>
        </div>

        {/* Action Button */}
        <button className="w-fit mt-2 bg-[#7c83fd] hover:bg-[#6b72ed] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
