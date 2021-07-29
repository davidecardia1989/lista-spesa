import { all, fork } from "redux-saga/effects";

import CarrelloSaga from "../pages/Carrello/saga";
import HomeSaga from "../pages/Home/saga";

export default function* rootSagas() {
  const sagas = [
    yield fork(HomeSaga),
    yield fork(CarrelloSaga),
  ];
  yield all(sagas);
}
