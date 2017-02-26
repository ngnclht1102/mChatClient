import { put, takeLatest, select } from 'redux-saga/effects'
import actions from '../actions'
import types from '../actionTypes'
import selectors from '../selectors'

function* double (action) {
  try {
    const currentCounter = yield select(selectors.getCounter)
    yield put(actions.doubleSuccess(currentCounter * 2))
  } catch (e) {
    yield put(actions.doubleFailed(e.message))
  }
}


function* doubleSaga () {
  yield takeLatest(types.DOUBLE_REQUEST, double)
}

export default doubleSaga
