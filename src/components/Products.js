import React from "react";
import ProductsCard from "./ProductsCard";
const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          hey this is a shopping website !!!SHop shop shop shop shop shop shop
          shop
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard/>
      </div>
    </div>
  );
};

export default Products;
