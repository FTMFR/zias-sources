import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import SeeMoreBtn from "../components/Btns/SeeMoreBtn";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductsCart from "../components/Product/ProductsCart";
import SearchBox from "../components/SearchBox/SearchBox";
import SliderImg from "../components/Slider/SliderImg";
import Image from "next/image";
import SliderProducts from "../components/Slider/SliderProducts";
import SliderBlogs from "../components/Slider/SliderBlogs";

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
        {/* add product list component */}
        <SliderProducts />
        <div className="divider"></div>
        {/* add blog list component */}
        <SliderBlogs />
      </div>
      {/* add footer component */}
      <Footer />
    </>
  );
}

export default HomePage;
