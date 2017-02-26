import types from '../actionTypes'

export const sendMessage = (message) => ({
  type: types.CLIENT_WEB_EMIT_MESSAGE,
  data: message
})
