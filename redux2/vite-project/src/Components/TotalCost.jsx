import { useSelector } from "react-redux";

const TotalCost = () => {
  const selector = useSelector((state) => {
    return state.CartReducer;
  });
  console.log("TotalCost Selector", selector);
  return (
    <>
      <p>Total Cost</p>
      {selector.reduce((total, current) => {
        console.log(total);
        console.log(current);
        return total + current.price * current.quantity;
      }, 0)}
    </>
  );
};

export default TotalCost;
