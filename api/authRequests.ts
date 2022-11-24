import api, { METHOD_POST } from './axois'
import { API } from '../constants/api'

export type AuthRequestType = {
  email: string
  password: string
}

export const loginRequest = ({ email, password }: AuthRequestType) => {
  return api(API.LOGIN, METHOD_POST, { email, password }, 'login');
};
export const registrationRequest = ({ email, password }: AuthRequestType) => {
  return api(API.REGISTRATION, METHOD_POST, { email, password }, 'registration');
};
