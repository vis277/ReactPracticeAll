import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBSTRACT,
  DIVIDE,
  MULTIPLY,
  addAction,
} from "./action";
const ReduxDay2 = () => {
  const selector = useSelector((state) => {
    console.log("ln5", state);
    return state.CounterReducer;
  });

  const dispatch = useDispatch();
  console.log("selector", selector);
  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleAdd = () => {
    // dispatch({ type: ADD, payload: +num1 + +num2 });
    dispatch(addAction(+num1 + +num2));
  };

  const handleSub = () => {
    dispatch({ type: SUBSTRACT, payload: +num1 - +num2 });
  };

  const handleDiv = () => {
    dispatch({ type: DIVIDE, payload: num1 / num2 });
  };

  const handleMlu = () => {
    dispatch({ type: MULTIPLY, payload: num1 * num2 });
  };
  const calc = useSelector((state) => {
    return state.calculator;
  });
  return (
    <>
      <p>I am Redux Day2 </p>
      <p>Counter : {selector}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
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
      <button onClick={handleAdd}>
        Add <p>{calc.add}</p>
      </button>
      <button onClick={handleSub}>
        Substract <p>{calc.substract}</p>
      </button>
      <button onClick={handleDiv}>
        Divide <p>{calc.divide}</p>
      </button>
      <button onClick={handleMlu}>
        Multiply <p>{calc.multiply}</p>
      </button>

      <p>{calc.add}</p>
    </>
  );
};

export default ReduxDay2;
