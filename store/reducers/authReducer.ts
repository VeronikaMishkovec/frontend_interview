import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthReducerType {
  refreshToken: string;
}

const initialState: AuthReducerType  = {
  refreshToken: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequestAction: (state, action) => {},
    loginSuccessAction: (state, action:PayloadAction<AuthReducerType>) => {
      state.refreshToken = action.payload.refreshToken
    },
    registrationRequestAction: (state, action) => {},
    registrationSuccessAction: (state, action:PayloadAction<AuthReducerType>) => {
      state.refreshToken = action.payload.refreshToken
    }
  }
})

export const {
  loginRequestAction,
  loginSuccessAction,
  registrationRequestAction,
  registrationSuccessAction
} = authSlice.actions

export default authSlice.reducer
