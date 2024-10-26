import Image from "next/image";

const ProductsCart = () => {
  return (
    <div className="w-44 h-64 my-3 rounded-xl border border-gray300 flex flex-col gap-2">
      <div className="relative">
        <div className="absolute -top-3 left-3 bg-brand-primary text-white py-1 px-2 rounded-md">
          ۱۰٪
        </div>
        <Image
          width="176"
          height="150"
          src="/images/img.jpg"
          alt="mock"
          className="rounded-t-xl rounded-b-none h-40 w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="font-bold text-[14px] ">تیشرت طرح کالیستا نخ پنبه</h1>
        <span className="text-[10px] text-gray500 ">
          طرح: خانه درشت، جنس: نخ پنبه
        </span>
      </div>
      <div className="flex flex-col justify-end items-end ml-3">
        <h3 className="text-[12px] font-bold">۳۵۰,۰۰۰ تومان</h3>
        <h4 className="text-[10px] font-bold text-gray500 line-through ml-1">
          ۴۵۰,۰۰۰ تومان
        </h4>
      </div>
    </div>
  );
};

export default ProductsCart;
