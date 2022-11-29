import { combineReducers } from 'redux'

import { authSlice } from './authReducer'
import { categorySlice } from './categoryReducer'

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  category: categorySlice.reducer
});
