import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({ id, image, name, stock, price, category }) => {
  return (
    <NavLink to={`/item/${id}`}>
      <div
        key={id}
        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white container-item"
      >
        <img
          src={image}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full group-hover:opacity-75"
        />
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <p className="mt-1 text-sm text-gray-500 text-left">
              Category: {category[0].toUpperCase() + category.substring(1)}
            </p>
            {stock ? (
              <p className="mt-1 text-sm text-green-500 text-left">
                Stock: {stock}
              </p>
            ) : (
              <p className="mt-1 text-sm text-red-400 text-left">Sold out</p>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
