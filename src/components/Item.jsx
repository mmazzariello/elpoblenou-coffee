import React from "react";
import { Button } from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const Item = ({ id, image, name, description, stock, price }) => {
  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-w-3 aspect-h-4 bg-gray-200  sm:aspect-none sm:h-96">
        <img
          src={image}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full group-hover:opacity-75"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <p className="mt-1 text-sm text-gray-500 text-left">{description}</p>
          {!stock ? (
            <p className="mt-1 text-sm text-red-400 text-left">Sold out</p>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col justify-end">
          <ItemCount stock={stock} />
        </div>
        <div className="mt-6">
          <Button
            backgroundColor={"gray.50"}
            fontSize="sm"
            width="100%"
            borderRadius="3xl"
            isDisabled={stock === 0}
          >
            Add to bag
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Item;
