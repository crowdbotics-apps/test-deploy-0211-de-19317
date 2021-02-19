import * as types from './constants';

// LOGIN
// {username, password} = data
export const apiLoginRequest = data => ({
  type: types.API_LOGIN_REQUEST,
  data,
});
// {data: {token: '', user: {}}} = response
export const apiLoginSuccess = response => ({
  type: types.API_LOGIN_SUCCESS,
  response,
});
// response is an error object
export const apiLoginFailed = response => ({
  type: types.API_LOGIN_FAILED,
  response,
});

// LOGOUT - pass the api token to the action request 
export const apiLogoutRequest = (token) => ({
  type: types.API_LOGOUT_REQUEST,
  token
});
export const apiLogoutSuccess = response => ({
  type: types.API_LOGOUT_SUCCESS,
  response,
});
export const apiLogoutFailed = response => ({
  type: types.API_LOGOUT_FAILED,
  response,
});

// SIGN UP
export const apiSignupRequest = data => ({
  type: types.API_SIGNUP_REQUEST,
  data,
});
export const apiSignupSuccess = response => ({
  type: types.API_SIGNUP_SUCCESS,
  response,
});
export const apiSignupFailed = response => ({
  type: types.API_SIGNUP_FAILED,
  response,
});

// PASSWORD RESET
export const apiPasswordResetRequest = data => ({
  type: types.API_PASSWORD_RESET_REQUEST,
  data,
});
export const apiPasswordResetSuccess = response => ({
  type: types.API_PASSWORD_RESET_SUCCESS,
  response,
});
export const apiPasswordResetFailed = response => ({
  type: types.API_PASSWORD_RESET_FAILED,
  response,
});

// FACEBOOK Connect data: {access_token: ''}
export const apiFacebookConnect = data => ({
  type: types.API_FACEBOOK_CONNECT,
  data,
});
export const apiFacebookConnectSuccess = response => ({
  type: types.API_FACEBOOK_CONNECT_SUCCESS,
  response,
});
export const apiFacebookConnectFailed = response => ({
  type: types.API_FACEBOOK_CONNECT_FAILED,
  response,
});

// GOOGLE Connect data: {access_token: ''}
export const apiGoogleConnect = data => ({
  type: types.API_GOOGLE_CONNECT,
  data,
});
export const apiGoogleConnectSuccess = response => ({
  type: types.API_GOOGLE_CONNECT_SUCCESS,
  response,
});
export const apiGoogleConnectFailed = response => ({
  type: types.API_GOOGLE_CONNECT_FAILED,
  response,
});

// APPLE Connect data: {access_token: ''}
export const apiAppleConnect = data => ({
  type: types.API_APPLE_CONNECT,
  data,
});
export const apiAppleConnectSuccess = response => ({
  type: types.API_APPLE_CONNECT_SUCCESS,
  response,
});
export const apiAppleConnectFailed = response => ({
  type: types.API_APPLE_CONNECT_FAILED,
  response,
});