/**
 *
 * Layout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import {
  // makeSelectData,
  makeSelectLocal,
} from '../../shared/redux/profile/selectors';
import reducer from '../../shared/redux/profile/reducer';

import actions from '../../shared/redux/profile/actions';

import saga from '../../shared/redux/profile/saga';

import ProductsTable from '../ProductsTable/ProductsTable';
import routes from '../../shared/routes';
const { Header, Content, Sider } = Layout;

const MainLayout = ({ logout, local }) => {
  useInjectReducer({ key: 'profile', reducer });

  const { logoutLoading } = local;

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav ss3</Menu.Item>
        </Menu> */}
        <Button
          style={{ color: 'red' }}
          loading={logoutLoading}
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Icon type="mail" />
              <Link to={routes.ProductsTable.path}> Product</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/products-table" component={ProductsTable} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

MainLayout.propTypes = {
  local: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  local: makeSelectLocal(),
});

const mapDispatchToProps = {
  ...actions,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga, mode: DAEMON });

export default compose(
  withConnect,
  memo,
  withSaga,
)(MainLayout);
