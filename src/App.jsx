import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Box style={{ height: "100%" }}>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ItemListContainer greeting="Specialty coffee in just one click" />
              }
            />
            <Route
              path="/category/:id"
              element={
                <ItemListContainer greeting="Specialty coffee in just one click" />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
