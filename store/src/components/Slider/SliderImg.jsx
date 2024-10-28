import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ScrollSlidersBtn from "../Btns/ScrollSlidersBtn";

const SliderImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef();

  const slidersImgs = [
    { id: 1, img: "/images/1.webp" },
    { id: 2, img: "/images/2.webp" },
    { id: 3, img: "/images/3.webp" },
    { id: 4, img: "/images/4.webp" },
  ];

  const scrollToSlide = (direction) => {
    const itemWidth = containerRef.current.children[0].offsetWidth;
    let newIndex = currentIndex;

    if (direction === "right") {
      newIndex = (currentIndex + 1) % slidersImgs.length;
    } else {
      newIndex = (currentIndex - 1 + slidersImgs.length) % slidersImgs.length;
    }

    setCurrentIndex(newIndex);
    
    containerRef.current.scrollTo({
      left: direction === "right" ? -itemWidth * currentIndex  : itemWidth * currentIndex ,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.children[0].offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    };

    
    
    container.addEventListener("onClick", handleScroll);
    return () => container.removeEventListener("onClick", handleScroll);
  }, []);
  console.log(currentIndex);

  return (
    <div className="relative">
      <div className="overflow-hidden w-[391px] mb-2">
        {/* slider should be infinit, after last slide goes to first and before first slide goes to last slide */}
        <div
          ref={containerRef}
          className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {slidersImgs.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[391px] transition-opacity duration-300"
              style={{ width: "100%" }}
            >
              <Image
                width={391}
                height={340}
                src={item.img}
                alt="img-slider"
                className="w-[391px] object-fill h-[340px] rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSlide("right")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <Image height={25} width={15} src="/images/pre.svg" alt="previous" />
      </button>
      <button
        onClick={() => scrollToSlide("left")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <Image height={25} width={15} src="/images/next.svg" alt="next" />
      </button>
      <div className="absolute bottom-3 right-[45%]">
        <ScrollSlidersBtn
          count={slidersImgs.length}
          indexOfActive={currentIndex}
        />
      </div>
    </div>
  );


};

export default SliderImg;
