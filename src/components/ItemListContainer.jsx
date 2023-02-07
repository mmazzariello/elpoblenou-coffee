import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const { category } = useParams();

  console.log("categoryContainer", category);

  useEffect(() => {
    showProducts()
      .then((res) => {
        setProductsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 1",
      description: "Description 1",
      category: "Coffee",
      price: "10€",
      stock: 2,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 2",
      description: "Description 2",
      category: "Coffee",
      price: "10€",
      stock: 0,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 3",
      description: "Description 3",
      category: "Equipment",
      price: "10€",
      stock: 2,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 4",
      description: "Description 4",
      category: "Machines",
      price: "10€",
      stock: 2,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 5",
      description: "Description 5",
      category: "Machines",
      price: "10€",
      stock: 2,
    },
  ];

  const showProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 3000);
      } else {
        reject("There aren't products");
      }
    });
  };

  //FILTER

  // console.log("productsList", productsList);

  if (category === undefined) {
    return (
      <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
        <Text fontSize="lg" color="gray.800">
          {greeting}
        </Text>
        <ItemList products={products} />
      </Box>
    );
  } else {
    const categoriesFilter = products.filter(
      (product) => product.category === category
    );

    return (
      <Box py={["8", "8", "12"]} px={["4", "4", "6"]} textAlign="center">
        <Text fontSize="lg" color="gray.800">
          {greeting}
        </Text>
        {categoriesFilter ? (
          <ItemList products={categoriesFilter} />
        ) : (
          <ItemList products={products} />
        )}
      </Box>
    );
  }
};

export default ItemListContainer;
