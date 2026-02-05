import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../componants/ProductItem";
import ProductForm from "../componants/ProductForm";

const Home = () => {
  const products = useSelector((state) => state.products) || [];

  return (
    // เปลี่ยนพื้นหลังเป็น Gradient สีพาสเทล (ชมพู -> ม่วง)
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-700 font-sans relative overflow-hidden">
      {/* Background Decor: ลูกบอลสีฟุ้งๆ ด้านหลัง */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* HEADER: พื้นหลังกระจกใสๆ ขอบสีม่วงอ่อน */}
      <header className="border-b border-purple-100 bg-white/60 backdrop-blur-md px-6 lg:px-12 py-6 relative z-10 sticky top-0">
        
      </header>

      {/* MAIN */}
      <main className="px-6 lg:px-12 py-10 relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* PRODUCTS SECTION */}
          <section className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-pink-400 block"></span>
              Products Collection
            </h2>

            {products.length === 0 ? (
              // Empty State: ปรับสีเส้นประและพื้นหลัง
              <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-white/50 py-24 text-center">
                <p className="text-gray-400 text-lg">No products yet ✨</p>
                <p className="text-sm text-pink-400 mt-2">
                  Add some items from the right panel
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>

          {/* FORM SIDEBAR */}
          <aside className="lg:col-span-1">
            {/* Card: พื้นขาว เงาสีม่วงฟุ้งๆ */}
            <div className="sticky top-28 rounded-3xl bg-white border border-purple-100 p-8 shadow-2xl shadow-purple-200/50">
              <h2 className="text-xl font-bold mb-1 text-gray-800">
                Add Product
              </h2>
              <p className="text-xs text-gray-400 mb-6">
                Fill product details below
              </p>

              <ProductForm />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
