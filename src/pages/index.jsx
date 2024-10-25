import Banner from "../components/Banner/Banner";
import SeeMoreBtn from "../components/Btns/SeeMoreBtn";
import Header from "../components/Header/Header";
import ProductsCart from "../components/Product/ProductsCart";
import SearchBox from "../components/SearchBox/SearchBox";
import SliderImg from "../components/Slider/SliderImg";

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
            <ProductsCart />
            <ProductsCart />
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
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
