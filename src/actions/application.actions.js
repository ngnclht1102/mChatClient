import types from '../actionTypes'

export const locationChange = (location = '/') => ({
  type: types.LOCATION_CHANGE,
  payload: location
})

export const increment = () => ({
  type: types.INCREMENT
})

export const doubleRequest = () => ({
  type: types.DOUBLE_REQUEST
})

export const doubleSuccess = (result) => ({
  type: types.DOUBLE_SUCCESS,
  payload: result
})

export const doubleFailed = (error) => ({
  type: types.DOUBLE_FAILED,
  error: error
})
