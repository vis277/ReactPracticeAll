import { useContext } from "react";
import ChildOne from "./ChildOne";

const Parent = () => {
  return (
    <>
      <p>I am from Parent</p>
      <ChildOne></ChildOne>
    </>
  );
};

export default Parent;
