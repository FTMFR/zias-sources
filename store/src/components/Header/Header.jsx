import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-12/12 h-12 items-center justify-center mx-auto border-2 border-black rounded-md mt-1">
      <div className="flex justify-center items-center gap-1">
        {/* add onclick event for show sidebar menu */}
        <Image
          width="45"
          height="45"
          src="/images/line-3-light.png"
          alt="menu"
        />
        {/* should be a link with href:homePage */}
        <h1 className="zias">ZIAS</h1>
      </div>
      <div className="flex flex-1 items-center justify-end gap-1">
        {/* add onclick event for show notifications overview */}
        <div className="relative">
          <span className="absolute -right-1 top-3 flex justify-center items-center bg-brand-primary rounded-full h-5 w-5 text-white font-bold text-14B">
            5
          </span>
          <Image
            width="28"
            height="25"
            src="/images/notif.svg"
            alt="notifications"
          />
        </div>
         {/* add onclick event for show profile overiew */}
         <Image width="30" height="30" src="/images/profile.png" alt="profile" />
        {/* add onclick event for show bag shop overview */}
        <div className="relative">
          <span className="absolute -right-1 top-3 flex justify-center items-center bg-brand-primary rounded-full h-5 w-5 text-white font-bold text-14B">
            5
          </span>
          <Image width="30" height="30" src="/images/bag.png" alt="bag shop" />
        </div>
       
      </div>
    </div>
  );
};

export default Header;
