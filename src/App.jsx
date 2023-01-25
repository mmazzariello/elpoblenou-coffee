import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <Box>
      <Navbar />
      <ItemListContainer greeting={"Specialty coffee in just one click"} />
    </Box>
  );
}

export default App;
