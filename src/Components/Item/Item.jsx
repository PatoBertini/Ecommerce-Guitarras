const Item = ({ id, img, nombre, precio }) => {
  return (
    <>
      <div className="guitarCard">
        <img src={img} alt="guitarra" className="item" />
        <h3>{nombre}</h3>
        <h5>{precio}</h5>
        <p>{id}</p>
      </div>
    </>
  );
};

export default Item;
