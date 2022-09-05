import "./Home.css";
import car1 from "../../assets/images/g9.jpg";
import car2 from "../../assets/images/g3.jpg";
import car3 from "../../assets/images/g4.jpg";
import car4 from "../../assets/images/g6.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="primerBanner">
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          className="slider"
        >
          <div className="carousel-div">
            <img src={car1} alt="" />
            <h1>Find your best guitarr</h1>

          </div>
          <div className="carousel-div">
            <img src={car2} alt="" />
            <h1>ACOUSTIC GUITARS</h1>
          </div>
          <div className="carousel-div">
            <img src={car3} alt="" />

            <h1>DRUMS GUITARS</h1>
          </div>
          <div className="carousel-div">
          <img src={car4} alt="" />
            <h1>CLASSICS GUITARS</h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
