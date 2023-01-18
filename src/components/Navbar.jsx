import React from "react";
import { Flex, Link } from "@chakra-ui/react";

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
    </Flex>
  );
};

export default Navbar;
