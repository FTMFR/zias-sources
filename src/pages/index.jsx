import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import SeeMoreBtn from "../components/Btns/SeeMoreBtn";
import Header from "../components/Header/Header";
import ProductsCart from "../components/Product/ProductsCart";
import SearchBox from "../components/SearchBox/SearchBox";
import SliderImg from "../components/Slider/SliderImg";
import Image from "next/image";

function HomePage() {
  return (
    <>
      {/* ‌banner goes here */}
      <Banner />
      {/* add container class for create a container with width 80% */}
      <div className="container">
        {/* add header component */}
        <Header />
        {/* add search box component */}
        <SearchBox />
        {/* add slider box img component */}
        <SliderImg />
        {/* divider */}
        <div className="divider"></div>
        {/* product list component */}
        <div className="flex flex-col mt-2">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-[16px]">محصولات جدید</h1>
            <SeeMoreBtn />
          </div>
          {/* will add ui in figma */}
          <div className="flex gap-2 overflow-hidden justify-between my-2">
            <Image
              width="25"
              height="25"
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
            <ProductsCart />
            <ProductsCart />
            <Image
              width="25"
              height="25"
              src="/images/arrow-left.svg"
              alt="arrow-left"
            />
          </div>
        </div>
        <div className="divider"></div>
        {/* blog list component */}
        <div className="flex flex-col my-2">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold text-[16px]">مقالات جدید</h1>
            <SeeMoreBtn />
          </div>
          {/* will add ui in figma */}
          <div className="flex gap-2 overflow-hidden justify-between my-2">
            <Image
              width="25"
              height="25"
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
            <Blogs />
            <Image
              width="25"
              height="25"
              src="/images/arrow-left.svg"
              alt="arrow-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
