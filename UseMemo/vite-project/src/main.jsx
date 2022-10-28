import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Parent from "./assets/Components/Parent";
import UseMemo from "./assets/Components/UseMemo";
import UseMemov2 from "./assets/Components/UseMemoV2";
import UseMemoV3 from "./assets/Components/UseMemoV3";
import UseMemoV4 from "./assets/Components/UseMemoV4";
import UseMemoV5 from "./assets/Components/UseMemoV5";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <UseMemo></UseMemo> */}
    {/* <UseMemoV3></UseMemoV3> */}
    {/* <UseMemoV4></UseMemoV4> */}
    {/* <UseMemoV5></UseMemoV5> */}
    <Parent></Parent>
  </>
);
