import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Box, Spinner } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetailContainer() {
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("productItem", productItem);

  const { id } = useParams();

  console.log("id", id);

  const getItem = () => {
    const db = getFirestore();

    setIsLoading(true);
    const oneItem = doc(db, "products", `${id}`);
    getDoc(oneItem)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const docs = snapshot.data();
          setProductItem(docs);
        }
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
