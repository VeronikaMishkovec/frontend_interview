import { AuthRequestType, registrationRequest } from '../../api/authRequests'
import {
  AuthReducerType,
  registrationRequestAction,
  registrationSuccessAction,
} from '../reducers/authReducer'
import { call, put, takeLatest } from '@redux-saga/core/effects'

interface PayloadType {
  payload: AuthRequestType;
}

function* registrationSagaWorker({ payload }: PayloadType) {
  try {
    const res: AuthReducerType = yield call(registrationRequest, payload);
    yield put(registrationSuccessAction(res));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* registrationSagaWatcher() {
  yield takeLatest(registrationRequestAction, registrationSagaWorker);
}
