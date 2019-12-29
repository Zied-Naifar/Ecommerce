import axios from 'axios';
import { X_IDENTITY_URL } from 'shared/constants';
import { setAccessTokenIfDefined } from './access-token';
const registerErrorInterceptors = () => {
  axios.interceptors.request.use(
    config =>
      // Do something before request sent
      config,
    error =>
      // Handle request error
      Promise.reject(error),
  );
  axios.interceptors.response.use(
    response =>
      // Do something with the response data
      response,
    error => {
      // Handle response error
      switch (error.response.status) {
        case 401:
          if (!setAccessTokenIfDefined()) {
            localStorage.removeItem('expires');
            localStorage.removeItem('token');
            localStorage.removeItem('tracert-session-key');
            window.location = '/';
          }
          break;
        default:
          break;
      }
      return Promise.reject(error);
    },
  );
};

export const errorsExtraction = errors =>
  Object.keys(errors).reduce(
    (acc, errorKey) => [...acc, ...errors[errorKey]],
    [],
  );

export default registerErrorInterceptors;
