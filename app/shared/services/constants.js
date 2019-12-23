const auth = {
  login: 'api/v1/auth/login',
  logout: 'api/v1/auth/logout',
};

export default {
  // baseApiUrl: () => window.baseApiUrl,
  baseApiUrl: () => 'http://localhost:5000/',
  auth,
};
