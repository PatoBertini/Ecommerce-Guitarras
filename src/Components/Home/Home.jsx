import "./Home.css";
import OwnCarousel from "./Carousel/Carousel";
import Banner from "./Banner/Banner";
import { BestSellers } from "./Best Sellers/BestSellers";

const Home = () => {
  return (
    <div>
      <Banner />
      <OwnCarousel />
      <BestSellers/>
    </div>
  );
};

export default Home;
