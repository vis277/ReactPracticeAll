import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 0,
  },
  reducers: {
    Add: (state, action) => {
      console.log("ln10", action);
      state.result = +action.payload.num1 + +action.payload.num2;
    },
    Substract: (state, action) => {
      state.result = +action.payload.num1 - +action.payload.num2;
    },
    Multiply: (state, action) => {
      state.result = +action.payload.num1 * action.payload.num2;
    },
    Divide: (state, action) => {
      state.result = +action.payload.num1 / action.payload.num2;
    },
  },
});

export const { Add, Substract, Multiply, Divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;
