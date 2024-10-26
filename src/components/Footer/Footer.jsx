import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-colitems-start w-full h-[110px] bg-gray300 ">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-row justify-between items-center w-full my-2">
          <div className="flex flex-col justify-start items-center">
            <div className="searchBoxZias text-[12px] font-bold text-center mb-1">
              دسترسی سریع
            </div>
            <div className="divider-sm"></div>
            <div className="text-[8px] flex flex-row gap-3 mt-1">
              <div className="flex flex-col gap-1">
                {/* link all of them to their pages */}
                <div>صفحه اصلی</div>
                <div>محصولات</div>
                <div>مجله فشن</div>
              </div>
              <div className="flex flex-col gap-1">
                <div>سوالات متداول</div>
                <div>ارتباط با ما</div>
                <div>درباره ما</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1 justify-center items-center">
            {/* link tel number to call */}
            <div className="text-[8px] ">تلفن پشتیبانی: 9899512452+</div>
            {/* copy this email to keybord */}
            <div className="text-[8px] ">ایمیل: zias@gmail.com</div>
          </div>
          <div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="text-[8px]">
                ما را در شبکه های اجتماعی دنبال کنید!
              </div>
              <div className="flex flex-row gap-3 justify-between items-center my-1">
                {/* social medias, link them to social medias */}
                <Image
                  width="15"
                  height="15"
                  src="/images/instagram.svg"
                  alt="instagram"
                />
                <Image
                  width="15"
                  height="15"
                  src="/images/linkedin.svg"
                  alt="linkedin"
                />
                <Image
                  width="15"
                  height="15"
                  src="/images/telegram.svg"
                  alt="telegram"
                />
                <Image
                  width="15"
                  height="15"
                  src="/images/twitter.svg"
                  alt="twitter"
                />
              </div>
            </div>
            <div className="text-[8px]">محل نمادهای اعتماد</div>
          </div>
        </div>
        <div className="flex flex-row text-[8px] font-bold gap-1 justify-center items-center">
          کليه حقوق محصولات و محتوای اين سایت متعلق به برند{" "}
          <div className="searchBoxZias font-bold">زی‌آث</div> می باشد.
        </div>
      </div>
    </div>
  );
};

export default Footer;
