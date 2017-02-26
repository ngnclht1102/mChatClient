import { put, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import types from '../actionTypes'

function* receiverChatFlow (action) {
  yield put(actions.chatReceived(action.data))
}

function* receiverChat () {
  yield takeLatest(types.SERVER_EMIT_MESSAGE, receiverChatFlow)
}

export default receiverChat
