/**
 *
 * Layout
 *
 */

import React, { memo } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import { compose } from 'redux';
import ProductsTable from '../ProductsTable/ProductsTable';
import routes from '../../shared/routes';

const MainLayout = props => {
  console.log('props: ', props);
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
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

const mapDispatchToProps = {};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainLayout);
