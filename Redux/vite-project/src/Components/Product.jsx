import { useSelector } from "react-redux";
import { PLUS, MINUS } from "./action";
const Product = () => {
  const selector = useSelector((state) => {
    console.log("ln5", state.cartReducer);
    return state.cartReducer;
  });
  console.log("ln8", selector);
  return (
    <>
      {selector.map((item) => {
        return (
          <div key={item.title}>
            <p>{item.title}</p>
            <p>Rs-{item.price * item.quantity}</p>
            <p>
              <button>-</button>
              {item.quantity} <button>+</button>
            </p>
          </div>
        );
      })}
    </>
  );
};
export default Product;
