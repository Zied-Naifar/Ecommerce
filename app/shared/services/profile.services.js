import axios from 'axios';
import { requestHeader } from 'shared/utils/requestHeader';
import URL from './constants';

export const login = async body => {
  const result = await axios.post(URL.baseApiUrl() + URL.auth.login, {
    ...body,
  });
  return result.data;
};

export const logout = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.auth.logout,
    requestHeader(),
  );
  return result.data;
};

export const register = async body => {
  const result = await axios.post(URL.baseApiUrl() + URL.auth.register, {
    ...body,
  });
  return result.data;
};

export const getProfile = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.auth.getProfile,
    requestHeader(),
  );
  return result.data;
};
