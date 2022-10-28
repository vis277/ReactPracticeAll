import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import ContactUs from "./assets/Components/ContactUs";
import FileNotFound from "./assets/FileNotFound";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="*" element={<FileNotFound></FileNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
