import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createElement } from "react";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [], isLoding: false },
  // reducers: {
  //   gettingData: (state, actions) => {
  //     state.isLoding = true;
  //   },
  //   getttingDataSuccess: (state, actions) => {
  //     console.log("ln11 action", actions);
  //     state.data = actions.payload;
  //     state.isLoding = false;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoding = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoding = false;
      });
  },
});

export const { gettingData, getttingDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;

// Old Thunk

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(gettingData());
//     const info = await fetch("https://jsonplaceholder.typicode.com/users");

//     const parsedInfo = await info.json();
//     dispatch(getttingDataSuccess(parsedInfo));
//   };
// }

//new thunk

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const info = await fetch("https://jsonplaceholder.typicode.com/users");

  const parsedInfo = await info.json();
  return parsedInfo;
});
