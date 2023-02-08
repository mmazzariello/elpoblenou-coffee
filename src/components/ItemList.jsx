import React from "react";
import { NavLink } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              stock={product.stock}
              category={product.category}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;

{
  /* <NavLink to={`/item/${item}`}> */
}
