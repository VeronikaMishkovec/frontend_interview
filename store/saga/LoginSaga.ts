import { AuthRequestType, loginRequest } from '../../api/authRequests'
import { AuthReducerType, loginSuccessAction, loginRequestAction } from '../reducers/authReducer'
import { call, put, takeLatest } from '@redux-saga/core/effects'

interface PayloadType {
  payload: AuthRequestType;
}

function* loginSagaWorker({ payload }: PayloadType) {
  try {
    const res: AuthReducerType = yield call(loginRequest, payload);
    yield put(loginSuccessAction(res));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* loginSagaWatcher() {
  yield takeLatest(loginRequestAction, loginSagaWorker);
}
