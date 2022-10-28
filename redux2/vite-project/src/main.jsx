import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Product from "./Components";
import "./index.css";
import store from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Product></Product>
  </Provider>
);
