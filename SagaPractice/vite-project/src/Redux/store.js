import { configureStore } from "@reduxjs/toolkit";

import reducer from "./rootReducer";

import rootSaga from "./rootSaga";

import createSagaMiddleWare from "redux-saga";

let sagaMiddleWare = createSagaMiddleWare();
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare({ thunk: false }),
    sagaMiddleWare,
  ],
});

sagaMiddleWare.run(rootSaga);
