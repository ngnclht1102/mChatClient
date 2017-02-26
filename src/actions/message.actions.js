import types from '../actionTypes'

export const chatReceived = (mesage) => ({
  type: types.CHAT_RECEIVED,
  payload: mesage
})

export const chatSendRequest = (mesage) => ({
  type: types.CHAT_SEND_REQUEST,
  payload: mesage
})

export const chatSendSuccess = (result) => ({
  type: types.CHAT_SEND_SUCCESS,
  payload: result
})

export const chatSendFailed = (error) => ({
  type: types.CHAT_SEND_FAILED,
  error: error
})
