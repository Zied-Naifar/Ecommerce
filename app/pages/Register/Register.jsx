/**
 *
 * Register
 *
 */

import React from 'react';

import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import Notification from 'shared/components/Notification';

import './register.scss';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
}));

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

  const classes = useStyles();
  const renderNotification = () => {
    if (!isEmpty(registerErrors.other)) {
      return <Notification type="warning" message={registerErrors.other} />;
    }
    return <></>;
  };

  const handleSubmit = () => {
    validateFields((err, values) => {
      if (err) {
        return;
      }
      register(values);
    });
  };
  return (
    <div className="register">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Description of Register" />
      </Helmet>
      {renderNotification()}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className={classes.form}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Form.Item extra={registerErrors.name}>
                    {getFieldDecorator('name', {
                      rules: [
                        {
                          required: true,
                          message: 'Name field is required',
                        },
                      ],
                    })(
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        onFocus={() => {
                          clearRegisterFormErrors('name');
                        }}
                      />,
                    )}
                  </Form.Item>
                </Grid>
                <Grid item xs={12}>
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
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onFocus={() => {
                          clearRegisterFormErrors('email');
                        }}
                      />,
                    )}
                  </Form.Item>
                </Grid>
                <Grid item xs={12}>
                  <Form.Item extra={registerErrors.password}>
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
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onFocus={() => {
                          clearRegisterFormErrors('password');
                        }}
                      />,
                    )}
                  </Form.Item>
                </Grid>
                <Grid item xs={12}>
                  <Form.Item>
                    {getFieldDecorator('secretKey', {
                      rules: [
                        {
                          required: true,
                          message: 'Secret key field is required',
                        },
                      ],
                    })(
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="secretKey"
                        label="Secret Key"
                        type="password"
                        id="secretKey"
                      />,
                    )}
                  </Form.Item>
                </Grid>
              </Grid>
            </Form>
          </div>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSubmit()}
            disabled={registerLoading}
          >
            {registerLoading && (
              <CircularProgress
                className={classes.circularProgress}
                size={20}
              />
            )}
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </div>
      </Container>
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
