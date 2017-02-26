import types from '../actionTypes'

const initialState = null
export default function locationReducer (state = initialState, action) {
  return action.type === types.LOCATION_CHANGE
    ? action.payload
    : state
}
