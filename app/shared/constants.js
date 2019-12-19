export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const GET = 'get';
export const URL_SEPARATOR = '/';
export const NOTIFICATION_TYPES = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
};

export const X_IDENTITY_URL = () => `${window.X_IDENTITY_URL}token`;
export const X_IDENTITY_LOGOUT_URL = () => `${window.X_IDENTITY_URL}logout`;

export const ROLES = {
  admin: 'ADMIN',
  user: 'USER',
};
