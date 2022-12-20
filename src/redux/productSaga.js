import { put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCT,SET_PRODUCT,SEARCH_PRODUCT } from "./constant/constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/product");
  data = yield data.json();
  
  yield put({ type: SET_PRODUCT, data });
}
function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  
  yield put({ type: SET_PRODUCT, data:result });
}
  function* productSaga() {
    yield takeEvery(GET_PRODUCT, getProducts);
    yield takeEvery(SEARCH_PRODUCT, searchProducts);
  }

export default productSaga;
