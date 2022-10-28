import { all, fork } from "redux-saga/effects";
import { watchNumberAction } from "../Components/saga";
export default function* rootSaga() {
  yield all([fork(watchNumberAction)]);
}
