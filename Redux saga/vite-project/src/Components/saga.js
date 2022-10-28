import { delay, put, takeLatest } from "redux-saga/effects";
import { addSuccess } from "./calculatorSlice";

function* addNumberAction(action) {
  console.log("ln4", action);
  const { num1, num2 } = action.payload;
  yield delay(2000);
  const result = +num1 + +num2;
  console.log(result);
  yield put(addSuccess({ result }));
}

export function* watchNumberAction() {
  yield takeLatest("calculatorSlice/add", addNumberAction);
}
