import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const data = ["Home", "Coffee", "Equipment", "Machines"];

const Navbar = () => {
  return (
    <Flex
      width="100%"
      px="6"
      py="5"
      align="center"
      justify="space-around"
      borderBottom="1px"
      borderColor="gray.200"
    >
      {data.map((item, i) => (
        <Link
          key={i}
          color="gray.800"
          _hover={{
            color: "gray.500",
          }}
        >
          {item}
        </Link>
      ))}
      <CartWidget />
    </Flex>
  );
};

export default Navbar;
