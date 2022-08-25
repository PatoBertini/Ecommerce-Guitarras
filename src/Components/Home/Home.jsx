import "./Home.css";
import himg from "../../assets/images/g7.jpg";

const Home = () => {
  return (
    <div>
      <div className="primerBanner">
        <h1>Welcome to the Guitarrin</h1>
        <h2>The Market Leaders in Carbon Fiber Acoustic & Electro-Hybrid Guitars.</h2>
        <h6>The first Ecommerce with online and physical shop!</h6>

        <img src={himg} alt="fondo" />
      </div>
    </div>
  );
};

export default Home;
