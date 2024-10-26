import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import { useEffect } from "react";
import SeeMoreBtn from "../Btns/SeeMoreBtn";

const SliderBlogs = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const containerRef = useRef();

  const currentIndexMath = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const itemWidth = containerRef.current.children[0].offsetWidth;
    const currentIndex = -Math.round(scrollLeft / itemWidth);
    setCenterIndex(currentIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", currentIndexMath);

    return () => {
      container.removeEventListener("scroll", currentIndexMath);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between mt-2">
        <h1 className="font-bold text-[16px]">مقالات جدید</h1>
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
              className={`snap-center w-[220px] h-[135px] transition-opacity duration-300 ml-4 ${
                centerIndex === index ? "opacity-100 " : "opacity-50"
              }`}
            >
              <Blogs />
            </div>
          ))}
      </div>
    </>
  );
};

export default SliderBlogs;
