import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReduxDay2 from "./Components";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Product from "./Components/product";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <ReduxDay2></ReduxDay2> */}
    <Product></Product>
  </Provider>
);
