import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import AboutDetails from "./Components/AboutDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error />} />
          <Route
            path="/about/:id"
            element={<AboutDetails></AboutDetails>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
