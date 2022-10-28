import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/ContactUs";
import ContactDetails from "./Components/ContacDetails";
export const data = createContext();
const DataProvider = data.Provider;
function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider value={"contextAPi DATA"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route
            path="/contact/:id"
            element={<ContactDetails></ContactDetails>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
