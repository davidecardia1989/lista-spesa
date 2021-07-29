import { call, put, takeLatest } from "redux-saga/effects";
import { addingProductSuccess, buyItemsSuccess } from "../../actions/Carrello";

function* addProduct({ payload }) {
  //add loading
  if (payload) {
    yield put(addingProductSuccess(payload));
  }
}
function* buyItems() {
  //add loading
  yield put(buyItemsSuccess());
}

function* CarrelloSaga() {
  yield takeLatest("ADDING_PRODUCT", addProduct);
  yield takeLatest("BOUGHT_ITEMS", buyItems);
}

export default CarrelloSaga;
