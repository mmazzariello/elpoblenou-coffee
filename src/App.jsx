import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
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
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
