import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./CalculatorReducer";
const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const selector = useSelector((item) => item.CalculatorReducer);

  console.log(selector);
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log("inside");
    dispatch(add({ num1, num2 }));
  };
  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      ></input>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      ></input>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>{selector.result}</div>
    </>
  );
};

export default Calculator;
