import {GET_TOKEN_SUCCESS, GET_TOKEN} from './types/Animals'

export const getTokenSuccess = response => ({
  type: GET_TOKEN_SUCCESS,
  response
});

export const getToken = params => ({
  type: GET_TOKEN,
  params
});