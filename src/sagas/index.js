import { fork } from 'redux-saga/effects'
import doubleSaga from './double.sagas'
import sendMesage from './sendMesage.sagas'
import receiveMessage from './receiveMessage.sagas'

function* rootSagas () {
  yield [
    fork(doubleSaga),
    fork(sendMesage),
    fork(receiveMessage)
  ]
}

export default rootSagas
