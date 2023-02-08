import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products, showProducts } from "../modules/utils";
import ItemCount from "./ItemCount";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetailContainer() {
  const [productItem, setProductItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
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
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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

            <form className="mt-6">
              <div className="flex flex-1 flex-col justify-end">
                <ItemCount stock={productItem.stock} />
              </div>
              <div className="sm:flex-col1 mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-800 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
