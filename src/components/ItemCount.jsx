import React, { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

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
    >
      <Button
        as="button"
        colorScheme="transparent"
        color={"gray.700"}
        mx="4"
        isDisabled={count === 0}
      >
        -
      </Button>
      <p className="text-sm text-gray-700">{count}</p>
      <Button
        as="button"
        colorScheme="transparent"
        color={"gray.700"}
        mx="4"
        isDisabled={stock === 0}
      >
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;
