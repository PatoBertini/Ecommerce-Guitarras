import "../Home.css";
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import Counter from "../../Counter/Counter";

export const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const itemCollection = collection(db, "productos");
    const q = query(itemCollection, where("subcategory", "==", "bestSeller"));
    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });

        setProducts(productos);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bestSellerConteiner">
      <div className="bestSellerData">
        <h1>This are our most wanted guitar's</h1>
        <h3>Go and give an eye to this fantastic's guitars</h3>
        <button>View Shop</button>
      </div>
      <div className="bestSellerCards">
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <div className="imggCardConteiner">
                <img src={product.img} alt="guitarra" className="bestCard" />
                <h2>{product.nombre}</h2>
                <h3>Price: {product.precio} €</h3>
               <Link to={`/detail/${product.id}`} >
               <button className="buyButtom">Buy</button>
               </Link>
              </div>
            );
          })}

        </Slider>
      </div>
    </div>
  );
};
