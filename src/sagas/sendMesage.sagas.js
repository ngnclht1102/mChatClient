import { put, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import types from '../actionTypes'
import api from '../api'


function* sendChatFlow (action) {
  try {
    yield put(api.sendMessage(action.payload))
    yield put(actions.chatSendSuccess())
  } catch (e) {
    yield put(actions.chatSendFailed(e.message))
  }
}


function* sendChat () {
  yield takeLatest(types.CHAT_SEND_REQUEST, sendChatFlow)
}

export default sendChat
