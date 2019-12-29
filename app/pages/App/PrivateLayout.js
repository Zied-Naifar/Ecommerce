/**
 *
 * Layout
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import classnames from 'classnames';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import useStyles from './themes/styles';

import {
  makeSelectData,
  makeSelectLocal,
} from '../../shared/redux/profile/selectors';
import reducer from '../../shared/redux/profile/reducer';

import actions from '../../shared/redux/profile/actions';

import saga from '../../shared/redux/profile/saga';

import { makeSelectGlobalLocal } from '../../shared/redux/global/selectors';
import globalReducer from '../../shared/redux/global/reducer';

import globalActions from '../../shared/redux/global/actions';

import globalSaga from '../../shared/redux/global/saga';

import ProductsTable from '../ProductsTable/ProductsTable';
import routes from '../../shared/routes';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/SideBar';

const MainLayout = ({
  logout,
  local,
  globalLocal,
  setIsSidebarOpened,
  getProfile,
  data,
}) => {
  useInjectReducer({ key: 'profile', reducer });
  useInjectReducer({ key: 'global', reducer: globalReducer });

  const classes = useStyles();

  useEffect(() => {
    getProfile();
  }, []);

  const { logoutLoading } = local;
  const { isSidebarOpened } = globalLocal;
  const { userInfo } = data;

  return (
    <div className={classes.root}>
      <>
        <Header
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
          logout={logout}
          userInfo={userInfo}
        />
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route exact path="/products-table" component={ProductsTable} />
          </Switch>
        </div>
      </>
    </div>
  );
};

MainLayout.propTypes = {
  local: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  local: makeSelectLocal(),
  globalLocal: makeSelectGlobalLocal(),
  data: makeSelectData(),
});

const mapDispatchToProps = {
  ...actions,
  ...globalActions,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga, mode: DAEMON });
const withGlobalSaga = injectSaga({
  key: 'global',
  saga: globalSaga,
  mode: DAEMON,
});

export default compose(
  withConnect,
  memo,
  withSaga,
  withGlobalSaga,
)(MainLayout);
