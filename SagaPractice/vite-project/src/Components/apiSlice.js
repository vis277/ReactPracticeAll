import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [], isLoding: false },
  reducers: {
    gettingData: (state, actions) => {
      state.isLoding = true;
    },
    getttingDataSuccess: (state, actions) => {
      console.log("ln11 action", actions);
      state.data = actions.payload.parsedInfo;
      state.isLoding = false;
    },
  },
});

export const { gettingData, getttingDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;
