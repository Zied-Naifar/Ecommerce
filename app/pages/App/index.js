/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { isEmpty } from 'lodash';

// import { Spin } from 'antd';
import MainLayout from './Layout';
import 'antd/dist/antd.css';

export default function App() {
  const renderLayout = () => {
    console.log('zzzz: ');
    // if (isSignedIn && localStorage.getItem('token')) {
    //   return (
    //     <Switch>
    //       <Route path="/" component={MainLayout} />
    //     </Switch>
    //   )
    // }
    return (
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    );
  };

  // if (!isEmpty(URLS)) {
  // if (true) {
  return <Fragment>{renderLayout()}</Fragment>;
  // }
  // return <Spin />; // loading endpoint
}
