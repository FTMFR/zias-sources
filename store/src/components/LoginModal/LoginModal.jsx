import Image from "next/image";
import React from "react";

const LoginModal = ({ toggleModal, onClose }) => {
  const handleBackgroundClick = (e) => {
    // Check if the click is on the overlay, not on the modal content
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 top-0 right-0 bg-black bg-opacity-70"
      id="modal-overlay"
      onClick={handleBackgroundClick}
    >
      <div className="relative flex items-center justify-center w-[310px] h-[225px] shadow-lg">
        <div
          className="absolute flex flex-col justify-between items-start bg-white gap-2 p-2 mx-auto rounded-[10px] w-[310px] h-[293px] shadow-lg top-40 right-[20%] text-right"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[280px] h-full p-2 flex flex-col gap-2 items-start justify-between">
            <div className="flex justify-between items-center w-[280px]">
              {/* if codes doesn't fill correctly, should show error and the ok button shouldn't work! */}
              <h1 className="text-[16px] font-bold">کد ارسالی را وارد کنید.</h1>
              {/* should clode when click on it */}
              <Image
                height={25}
                width={25}
                src="/images/close-circle.svg"
                alt="close btn"
                onClick={toggleModal}
              />
            </div>
            <div className="text-[8px] text-gray700">
              {/* email / number should be dynamic and change */}
              <span>
                لطفا کد تایید ارسالی به fatemefarajzade018@gmail.com را وارد
                کنید.
              </span>
            </div>
            <div className="text-[8px] underline">ویرایش شماره | ایمیل</div>
            <div className="">
              <input
                type="email"
                className="px-2 w-[280px] h-[40px] border border-black rounded-[5px] text-left"
              />
            </div>
            <div className="text-[8px] flex justify-between w-[280px]">
              <div className="underline">ارسال مجدد کد تایید</div>
              {/* this should be countdown and under 30s turn to red */}
              <div>۲:۰۰ باقیمانده</div>
            </div>
            <div className="w-[280px] bg-brand-primary text-white rounded-[5px] h-[35px]">
              <button className="text-[12px] w-full h-full">تایید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
