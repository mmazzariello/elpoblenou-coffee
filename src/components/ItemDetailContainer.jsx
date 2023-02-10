import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";
import { products, showProducts } from "../modules/utils";
import ItemDetail from "./ItemDetail";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetailContainer() {
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const getItem = () => {
    setIsLoading(true);
    showProducts(products)
      .then((res) => {
        res.map((item) => {
          const itemId = item.id;
          itemId === +id ? setProductItem(item) : null;
        });
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Box className="container-spinner">
          <Spinner className="spinner" />
        </Box>
      ) : (
        <ItemDetail productItem={productItem} />
      )}
    </Box>
  );
}
