import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "../../actions/login";

function* Login(action) {
   put(login("ciaone"));
//   try {
//   } catch (e) {
//   }
}

function* HomeSaga() {
  yield takeLatest("LOGIN", Login);
}

export default HomeSaga;
