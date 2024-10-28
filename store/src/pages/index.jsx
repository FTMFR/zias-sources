import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Signup from "../components/LoginModal/signup";
// import LoginModal from "../components/LoginModal/LoginModal";
// import Signup from "../components/LoginModal/signup";
import ProductsCart from "../components/Product/ProductsCart";
import SearchBox from "../components/SearchBox/SearchBox";
import SliderImg from "../components/Slider/SliderImg";
import Sliders from "../components/Slider/Sliders";
import LoginModal from "../components/LoginModal/LoginModal";

const HomePage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNextStapVisible, setNextStapVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const toggleNextStepModal = () => {
    setNextStapVisible((prev) => !prev);
  };

  const nextStepLogin = () => {
    setNextStapVisible(true);
  };

  return (
    <>
      {/* ‌banner goes here */}
      <Banner />
      {/* add container class for create a container with width 80% */}
      {isModalVisible && (
        <Signup
          toggleModal={toggleModal}
          onClose={toggleModal}
          nextStepLogin={nextStepLogin}
        />
      )}
      {isNextStapVisible && (
        <LoginModal toggleModal={toggleNextStepModal} onClose={toggleNextStepModal} />
      )}
      <div className="container">
        {/* add header component */}
        <Header toggleModal={toggleModal} />
        {/* add search box component */}
        <SearchBox />
        {/* add slider box img component */}
        <SliderImg />
        {/* divider */}
        <div className="divider"></div>
        {/* add product list component */}
        <Sliders Component={ProductsCart} totalItems={6} width="w-44" />
        <div className="divider"></div>
        {/* add blog list component */}
        <Sliders Component={Blogs} totalItems={6} width="w-64" />
        {/* <SliderBlogs /> */}
      </div>
      {/* add footer component */}
      <Footer />
    </>
  );
};

export default HomePage;
