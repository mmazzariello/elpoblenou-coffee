import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { products, showProducts } from "../modules/utils";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    showProducts(products)
      .then((res) => {
        setProductsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (id === undefined) {
    return (
      <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
        <Text fontSize="lg" color="gray.800">
          {greeting}
        </Text>
        <ItemList products={productsList} />
      </Box>
    );
  } else {
    const categoriesFilter = products.filter(
      (product) => product.category === id
    );

    return (
      <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
        <Text fontSize="lg" color="gray.800">
          {greeting}
        </Text>
        {categoriesFilter ? (
          <ItemList products={categoriesFilter} />
        ) : (
          <ItemList products={productsList} />
        )}
      </Box>
    );
  }
};

export default ItemListContainer;
