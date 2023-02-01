import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(0);

  return (
    <Flex
      justify="space-around"
      align="center"
      w="100%"
      my="2"
      border="1px"
      borderColor="gray.200"
      borderRadius="3xl"
      p="1"
    >
      <Box as="button" _hover={{ color: "gray.400" }} mx="4">
        -
      </Box>
      <p className="text-sm text-gray-700">{count}</p>
      <Box as="button" _hover={{ color: "gray.400" }} mx="4">
        +
      </Box>
    </Flex>
  );
};

export default ItemCount;
