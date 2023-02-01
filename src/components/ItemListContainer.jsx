import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
      <Text fontSize="lg" color="gray.800">
        {greeting}
      </Text>
      <ItemList />
    </Box>
  );
};

export default ItemListContainer;
