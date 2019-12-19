/*
 *
 * Aquarium reducer
 *
 */
import produce from 'immer'
import {
  updateList,
  filteringListAfterDeleting,
} from 'shared/utils/reducer.helper'
import constants from './constants'

export const initialState = {
  data: [],
  local: {
    loading: {
      fetchingAquariumLoading: false,
      creatingAquariumLoading: false,
      deletingAquariumLoading: false,
    },
    visible: false,
    errors: {
      creatingAquariumErrors: {
        capacity: [],
      },
      fetchingAquariumErrors: [],
      deletingAquariumErrors: {},
    },
  },
}

/* eslint-disable default-case, no-param-reassign */
const aquariumReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.fetchAquariums.request:
        draft.local.loading.fetchingAquariumLoading = true
        draft.local.errors.fetchingAquariumErrors = []
        break
      case constants.fetchAquariums.success:
        draft.local.loading.fetchingAquariumLoading = false
        draft.data = action.data.model
        break
      case constants.fetchAquariums.failure:
        draft.local.errors.fetchingAquariumErrors = action.arrayErrors
        draft.local.loading.fetchingAquariumLoading = false
        break
      case constants.addAquarium.request:
        draft.local.loading.creatingAquariumLoading = true
        draft.local.errors.creatingAquariumErrors = {}
        break
      case constants.addAquarium.success:
        draft.data = [...draft.data, action.data.model]
        draft.local.visible = false
        draft.local.loading.creatingAquariumLoading = false
        break
      case constants.addAquarium.failure:
        draft.local.errors.creatingAquariumErrors = action.objectErrors

        draft.local.loading.creatingAquariumLoading = false
        break
      case constants.updateAquarium.request:
        draft.local.errors.creatingAquariumErrors = {}
        draft.local.loading.creatingAquariumLoading = true
        break
      case constants.updateAquarium.success:
        // eslint-disable-next-line no-case-declarations
        draft.data = updateList(draft.data, action.data.model)
        draft.local.loading.creatingAquariumLoading = false
        draft.local.visible = false
        break
      case constants.updateAquarium.failure:
        draft.local.errors.creatingAquariumErrors = action.objectErrors
        draft.local.loading.creatingAquariumLoading = false
        break
      case constants.deleteAquarium.request:
        draft.local.loading.deletingAquariumLoading = true
        break
      case constants.deleteAquarium.success:
        // eslint-disable-next-line no-case-declarations
        draft.data = filteringListAfterDeleting(
          draft.data,
          action.data.model.id,
        )
        draft.local.loading.deletingAquariumLoading = false
        break
      case constants.deleteAquarium.failure:
        draft.local.deletingAquariumErrors = []
        draft.local.loading.deletingAquariumLoading = false
        break

      case constants.showModal.success:
        draft.local.visible = action.data
        break

      case constants.clearFormErrors.success:
        draft.local.errors.creatingAquariumErrors[action.data] = []
        break
    }
  })

export default aquariumReducer
