import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'
import rootSaga from './saga'

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const makeStore = () => store;
// @ts-ignore
export const wrapper = createWrapper<RootState>(makeStore);

saga.run(rootSaga);
