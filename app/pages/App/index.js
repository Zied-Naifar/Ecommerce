/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeSelectLocal } from '../../shared/redux/profile/selectors';

import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';
import Themes from './themes';

import './global-style.scss';

const App = ({ local }) => {
  const renderLayout = () => {
    if (local.isSignedIn && localStorage.getItem('token')) {
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

  return (
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      {renderLayout()}
    </ThemeProvider>
  );
};

App.propTypes = {
  local: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  local: makeSelectLocal(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(App);
