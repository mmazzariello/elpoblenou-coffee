import React from "react";
import { Flex, Link, Image } from "@chakra-ui/react";
import imgUrl from "./../assets/icon.jpg";
import CartWidget from "./CartWidget";

const data = ["Coffee", "Equipment", "Machines"];

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
      <Link
        _hover={{
          opacity: 0.6,
        }}
      >
        <Image boxSize="40px" src={imgUrl} alt="Logo" />
      </Link>
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
