import { call, put, takeLatest } from '@redux-saga/core/effects'

import { categoriesListRequest } from '../../api/categoriesRequests'
import {
  categoriesListRequestAction,
  categoriesListSuccessAction,
  CategoryReducerType,
} from '../reducers/categoryReducer'

function* categoriesListSagaWorker() {
  try {
    const res: CategoryReducerType = yield call(categoriesListRequest);
    yield put(categoriesListSuccessAction(res));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* categoriesListSagaWatcher() {
  yield takeLatest(categoriesListRequestAction, categoriesListSagaWorker);
}
