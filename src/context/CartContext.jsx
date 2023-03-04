import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(
    JSON.parse(window.localStorage.getItem("cartListInLS") || "[]")
  );
  const [itemsInfo, setItemsInfo] = useState([]);
  const [finalPrice, setFinalPrice] = useState("");

  const addToCart = ({ item, quantity }) => {
    const updatedCartList = [...cartList, { item, quantity }];

    setCartList(updatedCartList);
    window.localStorage.setItem(
      "cartListInLS",
      JSON.stringify(updatedCartList)
    );
  };

  const getOrderProductsInfo = () => {
    cartList.map((item) => {
      const itemName = item.item.name;
      const itemPrice = Number(item.item.price.replace("€", ""));
      const finalPrice = itemPrice * item.quantity;

      setItemsInfo([{ name: itemName, price: itemPrice }]);
      setFinalPrice(finalPrice);
    });
  };

  const clear = () => {
    setCartList([]);
  };

  const clearAll = () => {
    localStorage.setItem("cartListInLS", JSON.stringify([]));
    setCartList([]);
  };

  const removeItem = (itemId) => {
    const newCartList = cartList.filter((list) => {
      return list.item.id !== itemId;
    });

    setCartList(newCartList);
    window.localStorage.setItem("cartListInLS", JSON.stringify(newCartList));

    if (newCartList.length === 0) {
      clear();
      window.localStorage.setItem("cartListInLS", JSON.stringify(newCartList));
    }
  };

  return (
    <CartContext.Provider
      value={{
        clear,
        removeItem,
        addToCart,
        cartList,
        setCartList,
        getOrderProductsInfo,
        clearAll,
        itemsInfo,
        finalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
