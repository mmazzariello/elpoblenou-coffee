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
    console.log("updated", typeof updatedCartList);
    window.localStorage.setItem(
      "cartListInLS",
      JSON.stringify(updatedCartList)
    );
  };

  const clear = () => {
    setCartList([]);
  };

  const removeItem = (itemId) => {
    const newCartList = cartList.filter((list) => {
      return list.item.id !== itemId;
    });

    setCartList(newCartList);
    JSON.stringify(newCartList);

    console.log(newCartList.length);

    if (newCartList.length === 0) {
      clear();
      window.localStorage.setItem("cartListInLS", JSON.stringify(newCartList));
    }
  };

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
