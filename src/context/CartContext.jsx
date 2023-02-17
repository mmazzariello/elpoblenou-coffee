import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = ({ item, quantity }) => {
    return setCartList({ item, quantity });
  };

  console.log("cartList", cartList);

  const clear = () => {
    setCartList({});
  };

  const removeItem = (itemId) => {};

  // isInCart: (id) => true|false
  //actualizar el stock?

  return (
    <CartContext.Provider
      value={{ clear, removeItem, addToCart, cartList, setCartList }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
