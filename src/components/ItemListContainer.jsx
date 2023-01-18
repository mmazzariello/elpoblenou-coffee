import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box py="6" textAlign="center">
      <Text fontSize="lg" color="gray.800">
        {greeting}
      </Text>
    </Box>
  );
};

export default ItemListContainer;
