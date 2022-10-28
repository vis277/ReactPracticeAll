import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Api from "./assets/Components/Api";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Api></Api>
  </>
);
