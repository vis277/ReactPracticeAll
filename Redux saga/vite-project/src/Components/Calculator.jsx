import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./calculatorSlice";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const selector = useSelector((state) => state.calculatorSlice);
  const dispatch = useDispatch();

  console.log("ln122", selector);
  const handleAdd = () => {
    dispatch(add({ num1, num2 }));
  };
  return (
    <>
      <p>I am from Calculator</p>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      ></input>
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      ></input>
      <div>{selector.isFetching ? "Loading" : selector.result}</div>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
export default Calculator;
