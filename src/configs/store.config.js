import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import makeRootReducer from '../reducers'
import actions from '../actions'
import rootSaga from '../sagas'
import serverConfig from '../configs/server.config'
import io from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'


const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(actions.locationChange(nextLocation))
}

export default (initialState = {}) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // socket io middleware
  const socket = io(serverConfig.apiServer)
  const socketIoMiddleware = createSocketIoMiddleware(socket, 'WEB-CLIENT-SEND::')

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware, socketIoMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  sagaMiddleware.run(rootSaga)
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
