import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { products, showProducts } from "../modules/utils";
import ItemDetail from "./ItemDetail";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetailContainer() {
  const [productItem, setProductItem] = useState([]);

  const { id } = useParams();

  const getItem = () => {
    showProducts(products)
      .then((res) => {
        res.map((item) => {
          const itemId = item.id;
          itemId === +id ? setProductItem(item) : null;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Box>
      <ItemDetail productItem={productItem} />
    </Box>
  );
}
