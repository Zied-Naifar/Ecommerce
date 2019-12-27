import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the global state domain
 */

const selectGlobalDomain = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Global
 */

const makeSelectGlobal = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate,
  );

const makeSelectGlobalLocal = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.local,
  );

export default makeSelectGlobal;
export { selectGlobalDomain, makeSelectGlobalLocal };
