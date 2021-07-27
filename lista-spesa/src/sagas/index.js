import { all, fork } from "redux-saga/effects";

import HomeSaga from "../pages/Home/saga";

export default function* rootSagas() {
  const sagas = [
    yield fork(HomeSaga), // fork chiamata al generatore non bloccante
    // yield fork(HomeSaga),
  ];
  yield all(sagas); 
}
