import React from "react";
import Item from "./Item";

const ItemList = () => {
  const products = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 1",
      description: "Description 1",
      price: "10€",
      stock: 2,
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 2",
      description: "Description 2",
      price: "10€",
      stock: 0,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 3",
      description: "Description 3",
      price: "10€",
      stock: 2,
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Product 4",
      description: "Description 4",
      price: "10€",
      stock: 2,
    },
  ];

  const showProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    } else {
      reject("There aren't products");
    }
  });

  showProducts
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((item) => (
            <Item
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              stock={item.stock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
