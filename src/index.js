import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_,
  appId: process.env.REACT_APP_APP_ID,
};

 initializeApp(firebaseConfig);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
   <React.StrictMode>
     <CartContextProvider>
       <RouterProvider router={router} />
     </CartContextProvider>
   </React.StrictMode>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
