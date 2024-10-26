import React from "react";
import SeeMoreBtn from "../Btns/SeeMoreBtn";
import Image from "next/image";
import ProductsCart from "../Product/ProductsCart";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const SliderProducts = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef();

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const itemWidth = containerRef.current.children[0].offsetWidth;
    const currentIndex = -Math.round(scrollLeft / itemWidth);
    setCenterIndex(currentIndex);
    // console.log("Item Width:", itemWidth);
    // console.log("Scroll Left:", scrollLeft);
    // console.log("Current Index:", currentIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between mt-2">
        <h1 className="font-bold text-[16px]">محصولات جدید</h1>
        <SeeMoreBtn />
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 p-4 scrollbar-hide"
      >
        {Array(6)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className={`snap-center w-44 h-64 transition-opacity duration-300 ml-4 ${
                centerIndex === index ? "opacity-100 " : "opacity-50"
              }`}
            >
              <ProductsCart />
            </div>
          ))}
      </div>
    </>
  );
};

export default SliderProducts;
