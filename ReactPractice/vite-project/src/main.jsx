import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import ContactDetails from "./Components/ContacDetails";
import InputComp from "./Components/Practice";
ReactDOM.createRoot(document.getElementById("root")).render(
  <InputComp></InputComp>
);
