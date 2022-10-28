import { useDispatch, useSelector } from "react-redux";
import { PLUS, MINUS } from "./action";
import TotalCost from "./TotalCost";
const Product = () => {
  const selector = useSelector((state) => {
    return state.CartReducer;
  });
  console.log("ln8", selector);
  const dispatch = useDispatch();

  const handleDecrement = (title) => {
    dispatch({ type: MINUS, payload: { title } });
    console.log("indexfile selector", selector);
  };

  const handleIncrement = (title) => {
    dispatch({ type: PLUS, payload: { title } });
    console.log("indexfile selector", selector);
  };
  return (
    <>
      {selector.map((item) => {
        return (
          <div key={item.title}>
            <p>{item.title}</p>
            <p>Rs-/{item.price}</p>
            <p>
              <button onClick={() => handleDecrement(item.title)}>-</button>
              {item.quantity}
              <button onClick={() => handleIncrement(item.title)}>+</button>
              
            </p>
          </div>
        );
      })}

      <TotalCost></TotalCost>
    </>
  );
};
export default Product;
