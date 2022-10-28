import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Component/MainPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
