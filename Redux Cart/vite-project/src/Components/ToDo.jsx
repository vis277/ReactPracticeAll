import { ADDTODO, EDITTODO, DELETETODO, SHOWTODO } from "./action";
import { useSelector } from "react-redux";

const ToDo = () => {
  const selector = useSelector((state) => {
    console.log(state);
  });
  return (
    <>
      <input type="text"></input>
    </>
  );
};

export default ToDo;
