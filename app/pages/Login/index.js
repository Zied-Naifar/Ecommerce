/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectData,
  makeSelectLocal,
} from '../../shared/redux/profile/selectors';
import reducer from '../../shared/redux/profile/reducer';

import actions from '../../shared/redux/profile/actions';

import saga from '../../shared/redux/profile/saga';

import Login from './Login';

const LoginIndex = props => {
  useInjectReducer({ key: 'profile', reducer });

  return <Login {...props} />;
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  local: makeSelectLocal(),
});

const mapDispatchToProps = {
  ...actions,
};

const withSaga = injectSaga({ key: 'login', saga, mode: DAEMON });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withSaga,
)(LoginIndex);
