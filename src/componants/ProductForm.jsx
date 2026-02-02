import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action"; // แก้ไขชื่อไฟล์ถ้าจำเป็น
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } ,
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      imageUrl: "",
      price: "",
      quantity: "",
    }
  });

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };

  return (
    <div className="flex justify-center items-start p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
            />
            {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className={`w-full bg-gray-50 border ${errors.category ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="gadgets">Gadgets</option>
              <option value="accessories">Accessories</option>
            </select>
            {errors.category && <span className="text-red-500 text-xs">Please select a category</span>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Image Url
            </label>
            <input
              type="text"
              {...register("imageUrl", { required: true })}
              className={`w-full bg-gray-50 border ${errors.imageUrl ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
            />
            {errors.imageUrl && <span className="text-red-500 text-xs">Image URL is required</span>}
          </div>

          {/* Price & Quantity Row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Price
              </label>
              <input
                type="number"
                {...register("price", { required: true, min: 1 })}
                className={`w-full bg-gray-50 border ${errors.price ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Quantity
              </label>
              <input
                type="number"
                {...register("quantity", { required: true, min: 1 })}
                className={`w-full bg-gray-50 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5850ec] hover:bg-[#4a45d1] text-white font-semibold py-3 rounded-lg mt-4 shadow-md transition-all active:scale-[0.98]"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
