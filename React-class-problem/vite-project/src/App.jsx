import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Data } from "./assets/Data";
function App() {
  const [condition, setCondition] = useState(1);
  const [display, setDisplay] = useState("or");
  // const _handleCheck = (item) => {
  //   if (item.group === condition) {
  //     return display;
  //   }
  //   setCondition(item.group);
  // };
  // _handleCheck();
  return (
    <>
      {Data.map((item) => {
        return (
          <div>
            <div>
              {item.fieldName} {item.condition} {item.valueOne}
              <div>{item.group === condition ? "or" : "and"}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
