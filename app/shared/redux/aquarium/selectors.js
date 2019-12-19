import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the aquarium state domain
 */

const selectAquariumDomain = state => state.aquarium || initialState

/**
 * Other specific selectors
 */

const selectErrors = () =>
  createSelector(
    selectAquariumDomain,
    substate => substate.local.errors,
  )

/**
 * Default selector used by Aquarium
 */

const makeSelectAquarium = () =>
  createSelector(
    selectAquariumDomain,
    substate => substate,
  )

export default makeSelectAquarium
export { selectAquariumDomain, selectErrors }
