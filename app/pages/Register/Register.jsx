/**
 *
 * Register
 *
 */

import React from 'react';

import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Form, Input, Button, Radio } from 'antd';

import messages from './messages';

import './register.scss';

const Register = ({
  form: { validateFields, getFieldDecorator },
  register,
  local,
  clearRegisterFormErrors,
}) => {
  const {
    loading: { registerLoading },
    errors: { registerErrors },
  } = local;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('values: ', values);
      register(values);
    });
  };
  return (
    <div className="register">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Description of Register" />
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Form.Item extra={registerErrors.firstName}>
          {getFieldDecorator('firstName', {
            rules: [
              { required: true, message: 'First name field is required' },
            ],
          })(
            <Input
              placeholder="First Name"
              onFocus={() => clearRegisterFormErrors('firstName')}
            />,
          )}
        </Form.Item>
        <Form.Item extra={registerErrors.lastName}>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Last name field is required' }],
          })(
            <Input
              placeholder="Last Name"
              onFocus={() => clearRegisterFormErrors('lastName')}
            />,
          )}
        </Form.Item>
        <Form.Item extra={registerErrors.email}>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Email name field is required',
              },
              {
                type: 'email',
                message: 'You must enter a valid email',
              },
            ],
          })(
            <Input
              placeholder="Email"
              onFocus={() => clearRegisterFormErrors('email')}
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback extra={registerErrors.password}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 6,
                message: 'Password must be more than 6 caracters',
              },
            ],
          })(
            <Input.Password
              placeholder="Password"
              onFocus={() => clearRegisterFormErrors('password')}
            />,
          )}
        </Form.Item>

        <Button
          loading={registerLoading}
          onClick={() => handleSubmit()}
          type="primary"
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

Register.propTypes = {
  form: PropTypes.any,
  register: PropTypes.func.isRequired,
  local: PropTypes.object.isRequired,
  clearRegisterFormErrors: PropTypes.func.isRequired,
};

export default Form.create({ name: 'register_form' })(Register);
