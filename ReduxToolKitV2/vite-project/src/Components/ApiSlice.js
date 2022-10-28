import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "ApiCall",
  initialState: {
    isLoading: false,
    data: [],
  },
  //   reducers: {
  //     gettingData: (state, action) => {
  //       //   console.log("InsideGettingData");
  //       state.isLoading = true;
  //     },
  //     gettingDataSuccess: (state, action) => {
  //       //   console.log(action);
  //       state.data = action.payload;
  //       state.isLoading = false;
  //     },
  //   },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

export const { gettingData, gettingDataSuccess } = apiSlice.actions;
export default apiSlice.reducer;

// old thunk

// export function fetchProduct() {
//   return async function (dispatch, getState) {
//     dispatch(gettingData());
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const parseInfo = await response.json();
//     // console.log("ln29", parseInfo);
//     dispatch(gettingDataSuccess(parseInfo));
//   };
// }

//new thunk

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const info = await fetch("https://jsonplaceholder.typicode.com/users");

  const parsedInfo = await info.json();
  return parsedInfo;
});
