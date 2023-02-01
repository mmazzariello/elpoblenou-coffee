import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ id, image, name, description, stock, price }) => {
  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img
          src={image}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500 text-left">{description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <ItemCount />
        </div>
        <div className="mt-6">
          <a
            href={""}
            className="relative flex items-center justify-center rounded-3xl border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Add to bag
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
