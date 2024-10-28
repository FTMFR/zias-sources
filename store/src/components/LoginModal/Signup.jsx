import Image from "next/image";
import React from "react";

const Signup = ({ toggleModal, onClose, nextStepLogin }) => {
  // const [nextStep, setNextStep] = useState();
  const handleBackgroundClick = (e) => {
    // Check if the click is on the overlay, not on the modal content
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  const nextStapLoginHandler = () => {
    // e.preventDefault();

    onClose();
    nextStepLogin();
  };

  return (
    <div
      className="fixed inset-0 z-50 top-0 right-0 bg-black bg-opacity-70"
      id="modal-overlay"
      onClick={handleBackgroundClick}
    >
      <div className="relative flex items-center justify-center">
        <div
          className="absolute flex flex-col justify-between items-start bg-white gap-2 p-2 mx-auto rounded-[10px] w-[310px] h-[293px] shadow-lg top-40 right-[15%] text-right"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col justify-between items-start gap-2 p-2 mx-auto w-[310px] h-[280px]">
            <div className="flex flex-row justify-between items-center w-[280px]">
              <h1 className="text-[16px] font-bold">ورود | ثبت نام</h1>
              {/* should clode when click on it */}
              <Image
                onClick={toggleModal}
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
            <div className="relative mt-4">
              <label
                className="text-[10px] bg-white absolute -top-[9px] right-[10px]"
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
              قوانین و مقررات <div className="searchBoxZias">زی‌آث</div> را
              میپذیرم.
            </div>
            <div>
              {/* if everything alright, goes to next step */}
              <button
                className="banner text-white text-[12px] font-bold w-[280px] h-[35px] rounded-[5px]"
                onClick={nextStapLoginHandler}
              >
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
              <Image
                src="/images/google.svg"
                width={25}
                height={25}
                alt="gmail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
