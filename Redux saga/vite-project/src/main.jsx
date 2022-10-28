import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculator from "./Components/Calculator";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calculator></Calculator>
  </Provider>
);
