/**
 *
 * ProductsTable
 *
 */

import React from 'react';

// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

import './products-table.scss';

const ProductsTable = () => (
  <div className="products-table">
    <Helmet>
      <title>ProductsTable</title>
      <meta name="description" content="Description of ProductsTable" />
    </Helmet>
    <FormattedMessage {...messages.header} />
  </div>
);

ProductsTable.propTypes = {};

export default ProductsTable;
