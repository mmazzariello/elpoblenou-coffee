import React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcMLZgQQ1syCtN8n9Vh7eR4JjwaxmI7E8",
  authDomain: "speciality-coffee-91a8e.firebaseapp.com",
  projectId: "speciality-coffee-91a8e",
  storageBucket: "speciality-coffee-91a8e.appspot.com",
  messagingSenderId: "167864496076",
  appId: "1:167864496076:web:28f37072ec93de8c7ab769",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
