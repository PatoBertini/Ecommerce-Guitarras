import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="guitarCard">
      <Link to={`/detail/${item.id}`} className="linkDetail">
        <div className="imgCardConteiner">
          <img src={item.img} alt="guitarra" className="item" />
        </div>
        <div className="textCardConteiner">
          <h3>{item.nombre}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Item;
