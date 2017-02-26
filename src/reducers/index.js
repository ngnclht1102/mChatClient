import { combineReducers } from 'redux'
import application from './application.reducer'
import locations from './location.reducer'
import mesages from './mesages.reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    locations,
    application,
    mesages
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
