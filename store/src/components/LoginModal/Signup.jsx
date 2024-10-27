import Image from "next/image";
import React from "react";

const Signup = () => {
  return (
    <div className="w-[310px] h-[293px] flex flex-col justify-between items-start bg-white gap-2 p-2 rpunded-[10px]">
      <div className="flex flex-row justify-between items-center w-[280px]">
        <h1 className="text-[16px] font-bold">ورود | ثبت نام</h1>
        {/* should clode when click on it */}
        <Image
          height={25}
          width={25}
          src="/images/close-circle.svg"
          alt="close btn"
        />
      </div>
      <div>
        {/* receive this number or email and return it in next step */}
        <span className="text-[10px] text-gray700">
          درود! لطفا ایمیل یا شماره تلفن خود را وارد کنید.
        </span>
      </div>
      <div className="absolute'">
        <label
          className="text-[10px] bg-white relative top-3 right-2"
          htmlFor="email"
        >
          شماره موبایل | ایمیل
        </label>
        <input
          className="border border-black w-[280px] h-[40px] rounded-[5px] text-left px-2"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-row gap-1 text-[10px]">
        <input type="checkbox" />
        {/* if user click on second div, goes to privacy and security page */}
        قوانین و مقررات <div className="searchBoxZias">زی‌آث</div> را میپذیرم.
      </div>
      <div>
        {/* if everything alright, goes to next step */}
        <button className="banner text-white text-[12px] font-bold w-[280px] h-[35px] rounded-[5px]">
          تایید و ارسال کد
        </button>
      </div>
      <div className="w-[280px] flex flex-row justify-between items-center gap-1">
        <div className="divider flex-1"></div>
        <div>یا</div>
        <div className="divider flex-1"></div>
      </div>
      <div className="flex flex-row-reverse gap-2 w-[280px] h-[35px] rounded-[5px] justify-center items-center border border-black">
        {/* match it with back and auto login */}
        <div className="text-[12px] font-bold">ورود با گوگل</div>
        <Image src="/images/google.svg" width={25} height={25} alt="gmail" />
      </div>
    </div>
  );
};

export default Signup;
