import React, { useContext, useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "@chakra-ui/react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useDisclosure } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import PurchaseModal from "./PurchaseModal";

const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Cart() {
  const [orderId, setOrderId] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { removeItem, cartList } = useContext(CartContext);

  const getTotal = () => {
    const total = cartList.reduce((prevValue, item) => {
      const itemPrice = Number(item.item.price.replace("€", ""));
      const itemTotal = itemPrice * item.quantity;
      return prevValue + itemTotal;
    }, 0);

    return total;
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const getOrderProductsInfo = () => {
    const initialResult = {
      buyer: {
        email,
        firstName,
        lastName,
        address,
        apartment,
        city,
        region,
        postalCode,
        paymentMethod,
        cardNumber,
        nameOnCard,
        expirationDate,
        cvc,
      },
      items: [],
      total: 0,
    };

    const order2use = cartList.reduce((generatedResult, item) => {
      const itemName = item.item.name;
      const itemPrice = Number(item.item.price.replace("€", ""));
      const finalPrice = itemPrice * item.quantity;

      const itemInfo = { name: itemName, price: itemPrice };

      generatedResult.items = generatedResult.items.concat([itemInfo]);
      generatedResult.total = generatedResult.total + finalPrice;

      return generatedResult;
    }, initialResult);

    return order2use;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = getOrderProductsInfo();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          onSubmit={handleSubmit}
        >
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                Shipping information
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="apartment"
                      id="apartment"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setApartment(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Payment</h2>

              <fieldset className="mt-4">
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      {paymentMethodIdx === 0 ? (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          defaultChecked
                          className="px-3 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 input"
                        />
                      ) : (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          className="px-3 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 input"
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                      )}

                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setNameOnCard(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setExpirationDate(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm input"
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {cartList.map((item) => (
                  <li key={item.item.id} className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src={item.item.image}
                        alt={item.item.image}
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <div
                              // href={product.href}
                              href=""
                              className="font-medium text-gray-700 hover:text-gray-800"
                              onChange={() => setName(item.item.name)}
                            >
                              {item.item.name}
                            </div>
                          </h4>
                        </div>

                        <div className="ml-4 flow-root flex-shrink-0">
                          <button
                            type="button"
                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                              onClick={() => removeItem(item.item.id)}
                            />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p
                          className="mt-1 text-sm font-medium text-gray-900"
                          onChange={() =>
                            setPrice(
                              Number(item.item.price.replace("€", "")) *
                                item.quantity
                            )
                          }
                        >
                          {Number(item.item.price.replace("€", "")) *
                            item.quantity}
                          €
                        </p>

                        <div className="ml-4">
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Total</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {getTotal()}€
                  </dd>
                </div>
              </dl>

              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
                className="border-t border-gray-200 py-6 px-4 sm:px-6"
              >
                {email &&
                  firstName &&
                  lastName &&
                  address &&
                  apartment &&
                  region &&
                  postalCode &&
                  paymentMethod &&
                  cardNumber &&
                  nameOnCard &&
                  expirationDate &&
                  cvc && (
                    <Button type="submit" onClick={onOpen}>
                      Confirm order
                    </Button>
                  )}
              </div>
            </div>
          </div>
        </form>
        {isOpen && (
          <PurchaseModal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            orderId={orderId}
          />
        )}
      </div>
    </div>
  );
}
