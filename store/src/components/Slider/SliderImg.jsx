import Image from "next/image";
import React from "react";
import ScrollSlidersBtn from "../Btns/ScrollSlidersBtn";

const SliderImg = () => {
  return (
    <>
      {/* 
         slider images will display here 
         */}
      <div className="my-3 flex flex-col justify-center h-80 border-2 border-gray-slider rounded-xl relative">
        <div className="flex justify-between mx-2">
          <Image
            height="25"
            width="15"
            src="/images/next.svg"
            alt="next icon"
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            height="25"
            width="15"
            src="/images/pre.svg"
            alt="pre icon"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="absolute bottom-[5%] right-[36%]">
          <ScrollSlidersBtn />
        </div>
      </div>
    </>
  );
};

export default SliderImg;
