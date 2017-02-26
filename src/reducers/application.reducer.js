import types from '../actionTypes'

const initialState = {
  counter: 0
}

export default function applicationReducer (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case types.DOUBLE_SUCCESS:
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state
  }
}
