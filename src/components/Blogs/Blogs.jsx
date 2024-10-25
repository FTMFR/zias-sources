import Image from "next/image";

const Blogs = () => {
  return (
    <div className="flex flex-col gap-2 w-[220px] h-[135px] border rounded-[10px] bg-gray100 ">
      <div className="flex flex-row ">
        <div className="pt-2">
          <h1 className="text-[12px] font-bold ">تاریخچه طراحی لباس</h1>
          <span className="text-[6px] ">زمان حدودی مطالعه: ۵ دقیقه</span>
          <div className="text-[8px] text-gray500">
            مقاله تاریخچه طراحی لباس و نقش ایرانیان در آن با توجه به رشد
            روزافزون علم و آموزشهای کوتاه مدت،
          </div>
        </div>
        <Image width='80' height='89' src='/images/img.jpg' alt="mock " className="rounded-tl-[10px] rounded-none" />
      </div>
      <div className="flex justify-end pl-2 w-full">
        <button className="text-[10px] font-bold border px-3 py-1 rounded-[5px]">ادامه مطلب</button>
      </div>
    </div>
  );
};

export default Blogs;
