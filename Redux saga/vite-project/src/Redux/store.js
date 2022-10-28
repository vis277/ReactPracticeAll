import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSageMiddleWare from "redux-saga";

let sageMiddleWare = createSageMiddleWare();
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare({ thunk: false }),
    sageMiddleWare,
  ],
});

sageMiddleWare.run(rootSaga);
