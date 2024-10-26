import React, { useState, useRef, useEffect } from "react";
import SeeMoreBtn from "../Btns/SeeMoreBtn"; // Assuming you have a SeeMoreBtn component
import Image from "next/image";
import ProductsCart from "../Product/ProductsCart"; // Your ProductsCart component

const Carousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef(null);
  const totalItems = 6; // Total number of products

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft; // Get the current scroll position
    const itemWidth = containerRef.current.children[0].offsetWidth; // Get the width of the first item
    const currentIndex = Math.round(scrollLeft / itemWidth); // Calculate the current index
    setCenterIndex(currentIndex); // Update the center index
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row justify-between mt-2">
        <h1 className="font-bold text-[16px]">محصولات جدید</h1>
        <SeeMoreBtn />
      </div>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 p-4 scrollbar-hide"
        >
          {Array(totalItems)
            .fill()
            .map((_, index) => {
              const distance = Math.abs(centerIndex - index); // Calculate the distance from the center index
              // const opacity = distance === 0 ? 1 : 0.5; // Set opacity based on distance

              return (
                <div
                  key={index}
                  className={`snap-center transition-opacity duration-300 w-44 ml-4`}
                  // style={{ opacity }} // Apply calculated opacity
                >
                  <ProductsCart />
                </div>
              );
            })}
        </div>
      </div>
      <button
        onClick={() => containerRef.current.scrollBy({ left: -containerRef.current.children[0].offsetWidth, behavior: "smooth" })}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <img src="/images/arrow-left.svg" alt="arrow-left" />
      </button>
      <button
        onClick={() => containerRef.current.scrollBy({ left: containerRef.current.children[0].offsetWidth, behavior: "smooth" })}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <img src="/images/arrow-right.svg" alt="arrow-right" />
      </button>
    </div>
  );
};

export default Carousel;
