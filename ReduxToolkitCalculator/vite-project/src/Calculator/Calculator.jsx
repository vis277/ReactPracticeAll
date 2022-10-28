import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Divide, Multiply, Substract } from "./calulatorSlice";

const Calculator = () => {
  const selector = useSelector((state) => {
    console.log("ln6", state.calulatorSlice);
    return state.calulatorSlice;
  });
  console.log("ln8", selector);
  const dispatch = useDispatch();
  console.log(selector);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const dispatchAdd = () => {
    dispatch(Add({ num1, num2 }));
  };
  const dispatchSubstract = () => {
    dispatch(Substract({ num1, num2 }));
  };
  const dispatchMultiply = () => {
    dispatch(Multiply({ num1, num2 }));
  };
  const dispatchDivide = () => {
    dispatch(Divide({ num1, num2 }));
  };
  return (
    <>
      <p>Perform your operations</p>
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
      <p>Total:{selector.result}</p>
      <button onClick={dispatchAdd}>Add</button>
      <button onClick={dispatchSubstract}>Substract</button>
      <button onClick={dispatchMultiply}>Multiply</button>
      <button onClick={dispatchDivide}>Divide</button>
    </>
  );
};

export default Calculator;
