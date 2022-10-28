import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TreeView from "./assets/TreeView";
import "./index.css";
import TotalData from "./data";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TreeView Data={TotalData}></TreeView>
  </React.StrictMode>
);
