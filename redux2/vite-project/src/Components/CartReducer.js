import { PLUS, MINUS } from "./action";

const product = [
  { title: "first", price: 20, quantity: 1 },
  { title: "second", price: 40, quantity: 1 },
  { title: "third", price: 50, quantity: 1 },
];


const CartReducer = (state = product, action) => {
  if (action.type === PLUS) {
    let newCart = [];
    for (let i = 0; i < state.length; i++) {
      const currentElm = { ...state[i] };
      if (
        currentElm.title === action.payload.title &&
        currentElm.quantity < 5
      ) {
        currentElm.quantity = currentElm.quantity + 1;
      }
      newCart.push(currentElm);
    }
    return newCart;
  }
  if (action.type === MINUS) {
    let newCart = [];
    for (let i = 0; i < state.length; i++) {
      const currentElm = { ...state[i] };
      if (
        currentElm.title === action.payload.title &&
        currentElm.quantity >= 1
      ) {
        currentElm.quantity = currentElm.quantity - 1;
      }
      newCart.push(currentElm);
    }
    return newCart;
  }
  return state;
};

export default CartReducer;
