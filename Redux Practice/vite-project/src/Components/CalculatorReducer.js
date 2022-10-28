import { createSlice } from "@reduxjs/toolkit";

const calculatorReducer = createSlice({
  name: "Calculator",
  initialState: {
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      console.log("action", action);
      state.result = +action.payload.num1 + +action.payload.num2;
    },
  },
});

export const { add } = calculatorReducer.actions;
export default calculatorReducer.reducer;
