import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

const Calculator = () => {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [result, setResult] = useState(0);
  const _handleAdd = () => {
    setResult(+numOne + +numTwo);
  };
  const _handleOnchangeFirst = (e) => {
    return setNumOne(e.target.value);
  };

  const _handleOnchangeSecond = (e) => {
    return setNumTwo(e.target.value);
  };
  return (
    <>
      <p>Enter the first Number</p>
      {/* <input
        type="text"
        value={numOne}
        onChange={(e) => setNumOne(e.target.value)}
      /> */}

      <InputComponent
        type="text"
        value={numOne}
        onChange={_handleOnchangeFirst}
        placeholder="Enter the first number"
      ></InputComponent>
      <p>Enter the Second Number</p>
      {/* <input
        type="text"
        value={numTwo}
        onChange={(e) => setNumTwo(e.target.value)}
      /> */}
      <InputComponent
        type="text"
        value={numTwo}
        onChange={_handleOnchangeSecond}
        placeholder="Enter the second number"
      ></InputComponent>
      <div>
        {/* <button onClick={() => setResult(+numOne + +numTwo)}>Add</button> */}
        <ButtonComponent lable="Add" onBtnClick={_handleAdd}></ButtonComponent>
      </div>
      <p>{result}</p>
    </>
  );
};
export default Calculator;
