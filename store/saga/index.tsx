import { all } from '@redux-saga/core/effects'
import loginSagaWatcher from './LoginSaga'
import registrationSagaWatcher from './RegistrationSaga'

export default function* rootSaga() {
  yield all([
    loginSagaWatcher(),
    registrationSagaWatcher(),
  ]);
}
