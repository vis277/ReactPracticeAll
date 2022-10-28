import { call, put, takeLatest } from "redux-saga/effects";

import { getttingDataSuccess } from "./apiSlice";

function* getDataFromApi() {
  console.log("inside");
  const info = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/users")
  );
  const parsedInfo = yield info.json();
  console.log(parsedInfo);
  yield put(getttingDataSuccess({ parsedInfo }));
}

export function* watchGettingData() {
  yield takeLatest("data/gettingData", getDataFromApi);
}
