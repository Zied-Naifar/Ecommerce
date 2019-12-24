/**
 *
 * Login
 *
 */

import React from 'react';

import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Form, Icon, Input, Button } from 'antd';
// import messages from './messages';
import { isEmpty } from 'lodash';
import './login.scss';

const Login = ({
  form: { getFieldDecorator, validateFields },
  login,
  local,
  clearLoginFormErrors,
}) => {
  const { loading, errors } = local;
  const handleSubmit = () => {
    validateFields((err, values) => {
      if (err) {
        return;
      }
      login(values);
    });
  };
  return (
    <div className="login">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div className="login__form-container">
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <span>
                <Input
                  prefix={
                    <Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="email"
                />
              </span>,
            )}
          </Form.Item>
          <Form.Item extra={errors.loginErrors.other}>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <span>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                  className={`${!isEmpty(errors.loginErrors) &&
                    `x-required-field`}`}
                  onFocus={() => {
                    // clearFormErrors('password');
                    clearLoginFormErrors('other');
                  }}
                />
              </span>,
            )}
          </Form.Item>

          <Button
            loading={loading.loginLoading}
            onClick={() => handleSubmit()}
            type="primary"
          >
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.any,
  login: PropTypes.func.isRequired,
};

const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default WrappedLoginForm;
