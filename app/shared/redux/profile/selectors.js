import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profile state domain
 */

const selectProfileDomain = state => state.profile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Profile
 */

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

const makeSelectLocal = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.local,
  );

const makeSelectData = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.data,
  );

export default makeSelectProfile;
export { selectProfileDomain, makeSelectLocal, makeSelectData };
