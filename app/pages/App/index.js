/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
// import { isEmpty } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

// import { Spin } from 'antd';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

import { makeSelectLocal } from '../../shared/redux/profile/selectors';

import 'antd/dist/antd.css';

const App = ({ local }) => {
  const renderLayout = () => {
    if (local.isSignedIn && localStorage.getItem('token')) {
      console.log('object');
      return (
        <Switch>
          <Route path="/" component={PrivateLayout} />
        </Switch>
      );
    }
    return (
      <Switch>
        <Route path="/" component={PublicLayout} />
      </Switch>
    );
  };

  // if (!isEmpty(URLS)) {
  // if (true) {
  return <Fragment>{renderLayout()}</Fragment>;
  // }
  // return <Spin />; // loading endpoint
};

const mapStateToProps = createStructuredSelector({
  local: makeSelectLocal(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

App.propTypes = {
  local: PropTypes.object.isRequired,
};

export default compose(withConnect)(App);
