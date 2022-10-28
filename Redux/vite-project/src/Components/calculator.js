import { ADD, SUBSTRACT, DIVIDE, MULTIPLY } from "./action";

const initialState = {
  add: 0,
  substract: 0,
  multiply: 0,
  divide: 0,
  result: 0,
};

const calculator = (state = initialState, action) => {
  console.log("ln12", state);
  if (action.type === ADD) {
    return { ...state, add: state.add + action.payload };
  }
  if (action.type === SUBSTRACT) {
    return {
      ...state,
      substract: state.substract + action.payload,
    };
  }
  if (action.type === MULTIPLY) {
    return {
      ...state,
      multiply: state.multiply + action.payload,
    };
  }
  if (action.type === DIVIDE) {
    return { ...state, divide: state.divide + action.payload };
  }
  return state;
};

export default calculator;
