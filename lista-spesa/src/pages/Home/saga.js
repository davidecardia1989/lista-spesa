import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSuccess } from "../../actions/Homepage";

function* fetchData() {
  try {
    const response = yield call(fetch, "https://fakestoreapi.com/products");
    const responseBody = yield response.json();
    if (responseBody) {
      yield put(fetchSuccess(responseBody));
    }
  } catch (e) {}
}

function* HomeSaga() {
  yield takeLatest("FETCH_LIST_DATA", fetchData);
}

export default HomeSaga;
