import { all, fork } from "redux-saga/effects";

import { watchGettingData } from "../Components/apiSaga";

export default function* rootSaga() {
  yield all([fork(watchGettingData)]);
}
