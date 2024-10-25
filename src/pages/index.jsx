import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import SearchBox from "../components/SearchBox/SearchBox";
import SliderImg from "../components/Slider/SliderImg";

function HomePage() {
  return (
    <>
      <Banner />
      <div className="container">
        <Header />
        <SearchBox />
        <SliderImg />
      </div>
    </>
  );
}

export default HomePage;
