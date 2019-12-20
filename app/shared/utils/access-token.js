import queryString from 'query-string';
import { isEmpty } from 'lodash';
import { decodeToken } from './decode-header';

export const setAccessTokenIfDefined = () => {
  const parsed = queryString.parse(window.location.search);
  if (!isEmpty(parsed.access_token)) {
    localStorage.setItem('token', parsed.access_token);
    window.location = '/';
    return true;
  }
  return false;
};
export const getRoles = () => {
  const token = localStorage.getItem('token');
  const data = decodeToken(token);
  const roles =
    data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  if (typeof roles === 'string') {
    return [roles];
  }
  return roles;
};
export const getUserInformations = () => {
  try {
    const token = localStorage.getItem('token');
    const data = decodeToken(token);
    const userInformation = {
      id: getUserId(),
      userName: data.name,
      firstName: data.given_name,
      familyName: data.family_name,
      email:
        data[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ],
    };
    return userInformation;
  } catch (error) {
    return {
      userName: 'John',
      firstName: 'Doe',
      familyName: 'John Doe',
      email: 'john@gomycode.co',
    };
  }
};

export const getUserId = () => {
  const token = localStorage.getItem('token');
  if (!isEmpty(token)) {
    const decodedToken = decodeToken(token);
    return parseInt(
      decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],
      0,
    );
  }
  return -1;
};

export const hasToken = () => {
  const token = localStorage.getItem('token');
  if (!isEmpty(token)) {
    return true;
  }
  return false;
};
