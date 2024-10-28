import React from "react";

const ScrollSlidersBtn = ({count, indexOfActive}) => {
  return (
    <div className="flex gap-1.5">
      {Array(count)
        .fill()
        .map((_, index) => {
          return <div className={`circle ${indexOfActive === index ? 'active': ''}`} key={index}></div>;
        })}

      {/* <div className="circle active"></div> */}
    </div>
  );
};

export default ScrollSlidersBtn;
