import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ClassComp from "./ClassComp";
import ClassCompV2 from "./ClassCompV2";
// import Debounce from "./Debounce";
import DebounceV2 from "./DebounceV2";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DebounceV2></DebounceV2>
  </React.StrictMode>
);
