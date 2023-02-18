import React, { useState, useEffect } from "react";
import { Box, Text, Image, Spinner } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { products, showProducts } from "../modules/utils";
import imgUrl from "./../assets/home.png";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    showProducts(products)
      .then((res) => {
        setProductsList(res);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  if (id === undefined) {
    return (
      <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
        <Box className="container-frontPage">
          <Box className="container-frontText">
            <Text>Make every morning better with good coffee.</Text>
          </Box>
          <Image className="home-img" src={imgUrl} alt="Logo" />
        </Box>
        {isLoading ? (
          <Box className="container-spinner">
            <Spinner className="spinner-home" />
          </Box>
        ) : (
          <ItemList products={productsList} />
        )}
      </Box>
    );
  } else {
    const categoriesFilter = products.filter(
      (product) => product.category === id
    );

    return (
      <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
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
