import { createContext, useState } from "react";

export const CartContext = createContext();
// Exportamos CartContext y creamos un componente para enviar la data

// Crear el componente para generar estados y transmitirlos
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, cantidad) => {
    if (isInCart(product.id)) {
      sumarCantidad(product, cantidad);
    } else {
      setCart([...cart, { ...product, cantidad }]);
    }
  };
  // addToCart -> Recibimos product y cantidad pero p es un obj y c es una variable, para meter la variable en el obj hacemos {...product, cantidad}, ahora cantidad es una propiedad del objeto product

  // buscar la id del producto

  // corroborar si el producto ya está en el carrito (isInCart)
  const isInCart = (id) => {
    const valor = cart.some((prod) => prod.id === id);
    return valor;
  };

  //sumar cantidades del mismo producto
  const sumarCantidad = (product, cantidad) => {
    const newCart = cart.map((prod) => {
      if (product.id === prod.id) {
        const newProduct = { ...prod, cantidad: cantidad + prod.cantidad };
        // console.log(newProduct);
        return newProduct;
      } else {
        return prod;
      }
    });
    setCart(newCart);
  };

  // eliminar un solo producto pasandole el id
  const removeItem = (itemId) => {
    const newCartFilter = cart.filter((item) => item.id !== itemId);
    setCart(newCartFilter);
  };

  //todo: calcular total de unidades para el cart widget

  //todo: calcular total precio

  //vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, isInCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// value es un objeto en el cual envia argumentos a cualquier lado de la app que lo llame. tenes que importarlo y llamar el argumento que vos quieras, sea funcion, array, obj

// const isInCart = (id) => {
//   return cart.some((prod) => prod.id === id);
// };

// if (isInCart(product.id)) {
//   sumarCantidad(product, cantidad);
// } else {
//   // console.log({...product, cantidad});
//   setCart([...cart, { ...product, cantidad }]);
// }
