import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="guitarCard">
        <img src={item.img} alt="guitarra" className="item" />
        <h3>{item.nombre}</h3>
        <h5>$ {item.precio}</h5>
        <h5>{item.category}</h5>
      <Link to={`/detail/${item.id}`}>
        <button class="buy-b">
          <span class="hover-underline-animation"> Ver Detalles </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </Link>
        <p>{item.id}</p>
    </div>
  );
};

export default Item;
