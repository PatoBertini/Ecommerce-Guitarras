import "../Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import prueba from '../../../assets/images/mango-1.jpeg'

export const BestSellers = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bestSellerConteiner">
      <div className="bestSellerData">
        <h1>This are our most wanted guitar's</h1>
        <h3>Go and give an eye to this fantastic's guitars</h3>
        <button>View Shop</button>
      </div>
      <div className="bestSellerCards">
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          className="slider"
        >
          <div>
            <img src={prueba} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
