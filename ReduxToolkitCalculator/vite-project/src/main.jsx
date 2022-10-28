import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Calculator from "./Calculator/Calculator";
import store from "../src/Redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calculator></Calculator>
  </Provider>
);
