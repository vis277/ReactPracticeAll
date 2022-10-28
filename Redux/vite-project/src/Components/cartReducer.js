import { PLUS, MINUS } from "./action";

const product = [
  { title: "first", price: 20, quantity: 1 },
  { title: "second", price: 40, quantity: 1 },
  { title: "third", price: 50, quantity: 1 },
];

const cartReducer = (state = product, action) => {
  if (action.type === PLUS) {
    return { ...product, quantity: quantity + 1 };
  }
  if (action.type === MINUS) {
    return { ...product, quantity: quantity - 1 };
  }
  return product;
};

export default cartReducer;
