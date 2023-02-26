import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Box, Text, Image, Spinner } from "@chakra-ui/react";
import ItemList from "./ItemList";
import imgUrl from "./../assets/home.png";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("productListContainer", productsList);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    setIsLoading(true);

    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProductsList(docs);
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
      <Box px={["4", "4", "6"]} py={["4", "4", "6"]} textAlign="center">
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
    const categoriesFilter = productsList.filter(
      (product) => product.category === id
    );

    return (
      <Box px={["4", "4", "6"]} textAlign="center">
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
