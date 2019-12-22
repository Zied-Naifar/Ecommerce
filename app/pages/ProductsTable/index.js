/**
 *
 * ProductsTable
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductsTable from '../../shared/redux/productstable/selectors';
import reducer from '../../shared/redux/productstable/reducer';

import * as actions from '../../shared/redux/productstable/actions';

import saga from '../../shared/redux/productstable/saga';

import ProductsTable from './ProductsTable';

const ProductsTableIndex = props => {
  useInjectReducer({ key: 'productsTable', reducer });

  return <ProductsTable {...props} />;
};

const mapStateToProps = createStructuredSelector({
  productsTable: makeSelectProductsTable(),
});

const mapDispatchToProps = {
  ...actions,
};

const withSaga = injectSaga({ key: 'productsTable', saga, mode: DAEMON });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withSaga,
)(ProductsTableIndex);
