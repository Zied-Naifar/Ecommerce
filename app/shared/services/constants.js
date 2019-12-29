const auth = {
  login: 'api/v1/auth/login',
  logout: 'api/v1/auth/logout',
  register: 'api/v1/auth/register',
  getProfile: 'api/v1/auth/me',
};

export default {
  // baseApiUrl: () => window.baseApiUrl,
  baseApiUrl: () => 'http://localhost:5000/',
  auth,
};
