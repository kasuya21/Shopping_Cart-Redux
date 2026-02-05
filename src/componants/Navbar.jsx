import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const isHome = useSelector((state) => state.pages.home);
  const cartCount = useSelector((state) => state.carts.length);

  const handlePageChange = (pageType) => {
    dispatch({ type: pageType });
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-pink-100 shadow-lg shadow-purple-100/40 px-4">
      {/* LEFT */}
      <div className="flex-1">
        <button
          onClick={() => handlePageChange("HOME")}
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 hover:opacity-80 transition"
        >
          SE Shopping Cart
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex-none gap-3 flex items-center">
        {/* HOME */}
        <button
          onClick={() => handlePageChange("HOME")}
          className={`px-4 py-2 rounded-xl font-medium transition-all
            ${
              isHome
                ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md shadow-pink-300/40"
                : "text-gray-500 hover:text-purple-500 hover:bg-pink-50"
            }`}
        >
          Home
        </button>

        {/* CART */}
        <button
          onClick={() => handlePageChange("CART")}
          className={`btn btn-circle border-none transition-all
            ${
              !isHome
                ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md shadow-purple-300/40"
                : "bg-pink-50 text-purple-400 hover:bg-pink-100"
            }`}
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {cartCount > 0 && (
              <span className="badge badge-sm indicator-item border-0 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                {cartCount}
              </span>
            )}
          </div>
        </button>

        {/* PROFILE */}
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-pink-300 transition">
            <div className="w-10 rounded-full ring-2 ring-purple-200">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </button>

          <ul className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-xl rounded-2xl mt-3 w-52 p-2 shadow-xl border border-pink-100">
            <li>
              <a className="hover:text-pink-500">Profile</a>
            </li>
            <li>
              <a className="hover:text-purple-500">Settings</a>
            </li>
            <li>
              <a className="text-red-400 hover:bg-red-50">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
