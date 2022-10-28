import { bindActionCreators } from "redux";
import { INCREMENT, DECREMENT } from "./action";

const initialState = {
  counter: 10,
};

const CounterReducer = (state = initialState.counter, action) => {
  console.log("ln9", state);
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
