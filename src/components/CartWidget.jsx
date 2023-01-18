import React from "react";
import { Icon, Link, Flex } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
  return (
    <Flex align="center">
      <Link
        _hover={{
          color: "gray.500",
        }}
      >
        <Icon as={IoMdCart} fontSize="2xl" />
      </Link>
    </Flex>
  );
};

export default CartWidget;
