import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="guitarCard">
      <div className="imgCardConteiner">
        <img src={item.img} alt="guitarra" className="item" />
      </div>
      <div className="textCardConteiner">
        <h3>{item.nombre}</h3>
        <h5>Price: $ {item.precio}</h5>
        <h5>{item.category}</h5>
      </div>
      <Link to={`/detail/${item.id}`}>
        <button className="b-buy">
          <span className="hover-underline-animation"> Shop now </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </Link>
      {/* <p>{item.id}</p> */}
    </div>
  );
};

export default Item;
