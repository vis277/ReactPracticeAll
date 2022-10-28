import { useContext } from "react";
import { name } from "C:/Users/HP/Desktop/React Practice/UsecontextPractice/vite-project/src/App.jsx";
const ChildFour = () => {
  const fName = useContext(name);
  return (
    <>
      <p>I am from ChildFour</p>
      <p>Child four name is {fName}</p>
    </>
  );
};
export default ChildFour;
