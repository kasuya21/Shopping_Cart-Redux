import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../componants/ProductItem";
import ProductForm from "../componants/ProductForm";

const Home = () => {
  const products = useSelector((state) => state.products) || [];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans">
      {/* ===== HEADER ===== */}
      <header className="border-b border-white/10 px-6 lg:px-12 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          Future Store
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Inventory Management Dashboard
        </p>
      </header>

      {/* ===== MAIN GRID ===== */}
      <main className="px-6 lg:px-12 py-10">
        <div
          className="
            grid gap-8
            grid-cols-1
            lg:grid-cols-3
          "
        >
          {/* ===== PRODUCTS (2 columns) ===== */}
          <section className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold text-gray-200">
              Products
            </h2>

            {products.length === 0 ? (
              <div className="rounded-xl border border-dashed border-white/20 bg-white/5 py-20 text-center text-gray-400">
                No products yet
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="
                      rounded-xl
                      bg-[#151821]
                      border border-white/10
                      hover:border-blue-500/40
                      transition
                    "
                  >
                    <ProductItem product={product} />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ===== FORM (1 column) ===== */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <div
                className="
                  rounded-xl
                  bg-[#151821]
                  border border-white/10
                  p-6
                "
              >
                <h2 className="text-lg font-semibold mb-1">
                  Add Product
                </h2>
                <p className="text-xs text-gray-400 mb-6">
                  Fill product details below
                </p>

                <ProductForm />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
