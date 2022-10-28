import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ApiSlice";
const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((item) => item.ApiSlice);
  console.log("ln6", selector);
  const handleClick = () => {
    dispatch(fetchProduct());
  };
  return (
    <>
      <p>I am from home</p>
      <button onClick={handleClick}>Get Data</button>
    </>
  );
};

export default Home;
