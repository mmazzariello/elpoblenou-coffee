import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Image, Box } from "@chakra-ui/react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CartWidget from "./CartWidget";
import imgUrl from "./../assets/icon.jpg";
import { useParams } from "react-router-dom";

const data = ["Coffee", "Equipment", "Machines"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { categoryId } = useParams();

  console.log("data", data);

  console.log("categoryNav", categoryId);

  return (
    <Disclosure as="nav" className="bg-white shadow w-full relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    to="/"
                    _hover={{
                      opacity: 0.6,
                    }}
                  >
                    <Box
                      _hover={{
                        opacity: 0.6,
                      }}
                    >
                      <Image boxSize="40px" src={imgUrl} alt="Logo" />
                    </Box>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                  {data.map((item, i) => (
                    <NavLink to={`/category/${item}`}>
                      <div
                        className="text-sm
                        font-medium
                        text-gray-500
                        hover:border-gray-300
                        hover:text-gray-700"
                      >
                        {item}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <CartWidget />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute bg-white w-full shadow sidebar-position">
            <div className="space-y-1 pt-2 pb-4">
              {data.map((item, i) => (
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  {item}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
