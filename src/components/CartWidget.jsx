import React from "react";
import { Icon, Link, Flex } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
  return (
    <Link
      _hover={{
        color: "gray.500",
      }}
    >
      <Flex align="center">
        <Icon as={IoMdCart} fontSize="2xl" opacity="0.8" />
      </Flex>
    </Link>
  );
};

export default CartWidget;
