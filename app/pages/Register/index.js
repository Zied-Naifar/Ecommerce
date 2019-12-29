/**
 *
 * Register
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

import Register from './Register';

const RegisterIndex = props => {
  useInjectReducer({ key: 'profile', reducer });

  return <Register {...props} />;
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  local: makeSelectLocal(),
});

const mapDispatchToProps = {
  ...actions,
};

const withSaga = injectSaga({ key: 'profile', saga, mode: DAEMON });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withSaga,
)(RegisterIndex);
