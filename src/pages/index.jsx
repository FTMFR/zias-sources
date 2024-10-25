import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import SearchBox from "../components/SearchBox/SearchBox";

function HomePage() {
  return (
    <>
      <Banner />
      <div className="container">
        <Header />
        <SearchBox />
      </div>
    </>
  );
}

export default HomePage;
