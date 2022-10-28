import { useDispatch, useSelector } from "react-redux";
import { gettingData } from "./apiSlice";
const Data = () => {
  const selector = useSelector((item) => item.apiSlice);
  console.log(selector);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(gettingData());
  };
  return (
    <>
      <p>I am from Data</p>
      <button onClick={handleClick}>Get Data</button>
    </>
  );
};

export default Data;
