import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(window.localStorage.getItem("cartListInLS") || "[]")
  );

  const addToCart = ({ item, quantity }) => {
    const updatedCartList = [...cartList, { item, quantity }];

    setCartList(updatedCartList);
    window.localStorage.setItem(
      "cartListInLS",
      JSON.stringify(updatedCartList)
    );
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
