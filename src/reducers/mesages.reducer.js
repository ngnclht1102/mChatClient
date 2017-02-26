import types from '../actionTypes'

const initialState = {
  historyChat: []
}

export default function locationReducer (state = initialState, action) {
  switch (action.type) {
    case types.CHAT_RECEIVED:
      return {
        ...state,
        historyChat: [ ...state.historyChat, { type: 0, message: action.payload } ]
      }
    default:
      return state
  }
}
