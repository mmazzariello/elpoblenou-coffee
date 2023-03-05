import React, { useState, useContext } from "react";
import { Button } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ productItem }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="aspect-w-1 aspect-h-1 w-full">
            <img
              src={productItem.image}
              alt={productItem.image}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </div>

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {productItem.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {productItem.price}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: productItem.description }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              {productItem.stock ? (
                <p className="mt-1 text-sm text-green-500 text-left">
                  Stock: {productItem.stock}
                </p>
              ) : (
                <p className="mt-1 text-sm text-red-400 text-left">Sold out</p>
              )}
            </div>

            <form className="mt-2">
              <div className="sm:flex-col1 mt-4 flex justify-around items-center">
                <ItemCount
                  stock={productItem.stock}
                  onAdd={onAdd}
                  onSubtract={onSubtract}
                  count={count}
                />
                <Button
                  as="button"
                  colorScheme="transparent"
                  color={"gray.700"}
                  mx="4"
                  border="1px"
                  borderColor={"gray.200"}
                  borderRadius="3xl"
                  isDisabled={productItem.stock === 0 || count === 0}
                  w="50%"
                  onClick={() =>
                    addToCart({
                      item: productItem,
                      quantity: count,
                    })
                  }
                >
                  Add to cart
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemDetail);
