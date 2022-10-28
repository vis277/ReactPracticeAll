import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState: {
    result: 0,
    isFetching: false,
  },
  reducers: {
    add: (state, action) => {
      console.log("ln11 calculatorSlice", state, action);
      state.isFetching = true;
    },
    addSuccess: (state, action) => {
      console.log("ln15 calculatorSlice", state, action);
      state.isFetching = false;
      state.result = action.payload.result;
    },
    addFailure: (state, action) => {
      state.isFetching = false;
    },
  },
});

export const { add, addSuccess, addFailure } = calculatorSlice.actions;
export default calculatorSlice.reducer;
