import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Parent from "./assets/Components/Parent";
import { createContext } from "react";
export const name = createContext("Vishal");
const NameProvider = name.Provider;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NameProvider value="Vishal Kumar">
        <Parent></Parent>
      </NameProvider>
    </>
  );
}

export default App;
