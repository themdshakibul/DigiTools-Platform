import React, { useState } from "react";

const Products = () => {
  const [activeBtn, setactiveBtn] = useState("Products");

  return (
    <>
      <section className="container mx-auto px-2">
        <header className="text-center space-y-5">
          <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
          <p className="text-gray-500">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </header>
        {/* Card Togoling */}
        <div className="py-10 flex items-center justify-center">
          <button
            onClick={() => setactiveBtn("Products")}
            className={`btn py-6 px-8 rounded-l-full font-semibold ${activeBtn === "Products" ? "rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "rounded-r-none"}`}
          >
            Products
          </button>
          <button
            onClick={() => setactiveBtn("Card")}
            className={`btn py-6 px-8 rounded-r-full font-semibold ${activeBtn === "Card" ? "rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "rounded-l-none"}`}
          >
            Cart (2)
          </button>
        </div>

        {/* crds */}
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
