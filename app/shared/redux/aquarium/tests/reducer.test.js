import {
  updateList,
  filteringListAfterDeleting,
} from 'shared/utils/reducer.helper'
import produce from 'immer'
import aquariumReducer from '../reducer'
import constants from '../constants'

describe('aquariumReducer', () => {
  let state
  beforeEach(() => {
    state = {
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
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(aquariumReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the FETCH_AQUARIUM_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.loading.fetchingAquariumLoading = true
      draft.local.errors.fetchingAquariumErrors = []
    })
    const action = {
      type: constants.fetchAquariums.request,
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the FETCH_AQUARIUM_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.loading.fetchingAquariumLoading = false
      draft.data = {}
    })
    const action = {
      type: constants.fetchAquariums.success,
      data: {
        model: {},
      },
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the FETCH_AQUARIUM_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.errors.fetchingAquariumErrors = []
      draft.local.loading.fetchingAquariumLoading = false
    })
    const action = {
      type: constants.fetchAquariums.failure,
      arrayErrors: [],
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the ADD_AQUARIUMS_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.loading.creatingAquariumLoading = true
      draft.local.errors.creatingAquariumErrors = {}
    })
    const action = {
      type: constants.addAquarium.request,
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the ADD_AQUARIUMS_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = [...draft.data, {}]
      draft.local.visible = false
      draft.local.loading.creatingAquariumLoading = false
    })
    const action = {
      type: constants.addAquarium.success,
      data: {
        model: {},
      },
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the ADD_AQUARIUMS_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.errors.creatingAquariumErrors = []
      draft.local.loading.creatingAquariumLoading = false
    })
    const action = {
      type: constants.addAquarium.failure,
      objectErrors: [],
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the UPDATE_AQUARIUM_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.errors.creatingAquariumErrors = {}
      draft.local.loading.creatingAquariumLoading = true
    })
    const action = {
      type: constants.updateAquarium.request,
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the UPDATE_AQUARIUM_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = updateList(draft.data, {})
      draft.local.loading.creatingAquariumLoading = false
      draft.local.visible = false
    })
    const action = {
      type: constants.updateAquarium.success,
      data: {
        model: {},
      },
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the UPDATE_AQUARIUM_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.errors.creatingAquariumErrors = []
      draft.local.loading.creatingAquariumLoading = false
    })
    const action = {
      type: constants.updateAquarium.failure,
      objectErrors: [],
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the DELETE_AQUARIUM_REQUEST action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.loading.deletingAquariumLoading = true
    })
    const action = {
      type: constants.deleteAquarium.request,
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the DELETE_AQUARIUM_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = filteringListAfterDeleting(draft.data, '')
      draft.local.loading.deletingAquariumLoading = false
    })
    const action = {
      type: constants.deleteAquarium.success,
      data: {
        model: {
          id: '',
        },
      },
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the DELETE_AQUARIUM_FAILURE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.deletingAquariumErrors = []
      draft.local.loading.deletingAquariumLoading = false
    })
    const action = {
      type: constants.deleteAquarium.failure,
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the SHOW_MODAL_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.visible = {}
    })
    const action = {
      type: constants.showModal.success,
      data: {},
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })

  it('should handle the CLEAR_FORM_ERRORS_SUCCESS action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.local.errors.creatingAquariumErrors[{}] = []
    })
    const action = {
      type: constants.clearFormErrors.success,
      data: {},
    }
    expect(aquariumReducer(state, action)).toEqual(expectedResult)
  })
})
