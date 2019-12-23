/**
 *
 * Login
 *
 */

import React from 'react';

// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

import './login.scss';

const Login = () => (
  <div className="login">
    <Helmet>
      <title>Login</title>
      <meta name="description" content="Description of Login" />
    </Helmet>
    <FormattedMessage {...messages.header} />
  </div>
);

Login.propTypes = {};

export default Login;
