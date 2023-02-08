export const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Product 1",
    description: "Description 1",
    category: "coffee",
    price: "10€",
    stock: 2,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Product 2",
    description: "Description 2",
    category: "coffee",
    price: "10€",
    stock: 0,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Product 3",
    description: "Description 3",
    category: "equipment",
    price: "10€",
    stock: 2,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Product 4",
    description: "Description 4",
    category: "machines",
    price: "10€",
    stock: 2,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Product 5",
    description: "Description 5",
    category: "machines",
    price: "10€",
    stock: 2,
  },
];

export const showProducts = (products) => {
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
