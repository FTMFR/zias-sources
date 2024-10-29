import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Image from "next/image";

const ProductsID = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <Header />
        <SearchBox />
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="text-[12px] text-gray600">
            خانه {">"} محصولات {">"} تیشرت
          </div>
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-[16px] font-bold">
              تیشرت طرح کالیستا نخ پنبه خانه درشت
            </h1>
            <div className="flex flex-row justify-between items-center gap-2">
              <Image
                width={30}
                height={30}
                src="/images/bookmark.svg"
                alt="bookmark"
              />
              <Image
                width={30}
                height={30}
                src="/images/share.svg"
                alt="share"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-full mx-auto gap-2">
            <Image
              width={330}
              height={150}
              src="/images/img.jpg"
              alt="image"
              className="rounded-[10px]"
            />
            <button
              onClick={() => scrollToSlide("right")}
              className="absolute top-[40%] -left-2 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
              <Image
                height={25}
                width={15}
                src="/images/pre.svg"
                alt="previous"
              />
            </button>
            <button
              onClick={() => scrollToSlide("left")}
              className="absolute top-[40%] -right-2 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
              <Image height={25} width={15} src="/images/next.svg" alt="next" />
            </button>
            <div className="flex flex-row-reverse justify-around items-center">
              <div className="text-[12px]">۴۱۰ علاقمندی</div>
              <Image
                width={30}
                height={30}
                src="/images/bookmark-fill.svg"
                alt="bookmark fill"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[12px] ">
              لطفا رنگ و سایز مورد نظر خود در قسمت زیر انتخاب کنید:
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="text-[16px]">
                <div>رنگ:</div>
                <div>{/* add colors here */}</div>
              </div>
              <div className="text-[16px]">
                <div>سایز:</div>
                <div>{/* add sizes here */}</div>
              </div>
            </div>
          </div>
          <div>{/* size guid here */}</div>
          <div className="divider-page"></div>
          <div className="flex flex-col gap-1 justify-center text-right items-start bg-gray200 p-2 rounded-[10px] shadow-lg">
            <h3 className="text-[16px] font-bold">معرفی محصول</h3>
            <span className="text-[12px]">
              تی‌شرت مردانه ساده با آستین کوتاه چاکدار این تی‌شرت از پارچه‌ی نخی
              سبک و خنک‌کننده ساخته شده است، که در فصل‌های گرم به خوبی مناسب
              است. تی‌شرت طراحی ساده است. پشت تیشرت دو سانتی متر بلند تر از جلوی
              کار است این ویژگی به آن امکان می‌دهد که با انواع شلوارها،
              شلوارک‌ها ترکیب شود.  آستین‌های کوتاه تی‌شرت، راحتی بیشتری به
              کاربر می‌دهد و مناسب فصل‌های گرم است.
            </span>
          </div>
          <div className="text-[10px] flex flex-row justify-between items-center my-auto w-full bg-gray100 mt-4 rounded-[10px] p-2">
            <div className="flex flex-col justify-between items-center h-[50px]">
              <Image
                src="/images/repeat-circle.svg"
                width={30}
                height={30}
                alt="repeat-circle"
              />
              ضمانت بازگشت وجه
            </div>
            <div className="divider-section"></div>
            <div className="flex flex-col justify-between items-center h-[50px]">
              <Image
                src="/images/mobile.svg"
                width={15}
                height={18.75}
                alt="repeat-circle"
              />
              پرداخت آنلاین
            </div>
            <div className="divider-section"></div>
            <div className="flex flex-col justify-between items-center h-[50px]">
              <Image
                src="/images/map.svg"
                width={20}
                height={20}
                alt="repeat-circle"
              />
              ارسال به سراسر ایران
            </div>
            <div className="divider-section"></div>
            <div className="flex flex-col justify-between items-center h-[50px]">
              <Image
                src="/images/box.svg"
                width={20}
                height={20}
                alt="repeat-circle"
              />
              تحویل سریع و آسان
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 rounded-tl-[10px] rounded-tr-[10px] rounded-none shadow-top w-full bg-gray50 py-4">
        {/* fixed botttom */}
        <div className="w-[90%] flex flex-row justify-between items-center mx-auto">
          <div>
            <button className="text-[10px] font-bold px-4 py-2 border border-btns rounded-[5px] ">
              افزودن به سبد خرید
            </button>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="text-[14px] font-bold">۴۵۰,۰۰۰ تومان</div>
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-[10px] line-through text-gray600">
                ۵۵۰,۰۰۰ تومان
              </span>
              <div className="text-[12px] bg-brand-primary text-white py-1 px-1.5 rounded-[5px] ">
                ۱۰٪
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsID;
