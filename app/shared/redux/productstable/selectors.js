import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productsTable state domain
 */

const selectProductsTableDomain = state => state.productsTable || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductsTable
 */

const makeSelectProductsTable = () =>
  createSelector(
    selectProductsTableDomain,
    substate => substate,
  );

export default makeSelectProductsTable;
export { selectProductsTableDomain };
