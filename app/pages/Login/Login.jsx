/**
 *
 * Login
 *
 */

import React from 'react';

import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Form } from 'antd';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

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
import './login.scss';

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

const Login = ({
  form: { getFieldDecorator, validateFields },
  login,
  local,
  clearLoginFormErrors,
}) => {
  const {
    loading: { loginLoading },
    errors: { loginErrors },
  } = local;

  const classes = useStyles();
  const renderNotification = () => {
    if (!isEmpty(loginErrors.other)) {
      return <Notification type="warning" message={loginErrors.other} />;
    }
    return <></>;
  };
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
      {renderNotification()}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <div className={classes.form}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Form.Item extra={loginErrors.email}>
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
                          clearLoginFormErrors('email');
                        }}
                      />,
                    )}
                  </Form.Item>
                </Grid>
                <Grid item xs={12}>
                  <Form.Item extra={loginErrors.password}>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
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
                          clearLoginFormErrors('password');
                        }}
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
            disabled={loginLoading}
          >
            {loginLoading && (
              <CircularProgress
                className={classes.circularProgress}
                size={20}
              />
            )}
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/register">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.any,
  login: PropTypes.func.isRequired,
  local: PropTypes.object,
  clearLoginFormErrors: PropTypes.func.isRequired,
};

const WrappedLoginForm = Form.create({ name: 'login' })(Login);

export default WrappedLoginForm;
