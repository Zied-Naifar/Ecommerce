import actions from '../actions'
import constants from '../constants'

describe('fetchAquariums action', () => {
  it('has a type of FETCH_AQUQRIUMS_REQUEST,', () => {
    const expected = {
      type: constants.fetchAquariums.request,
    }
    expect(actions.fetchAquariums()).toEqual(expected)
  })
})

describe('addAquarium action', () => {
  it('has a type of ADD_AQUQRIUM,', () => {
    const expected = {
      type: constants.addAquarium.request,
    }
    expect(actions.addAquarium()).toEqual(expected)
  })
})

describe('updateAquarium action', () => {
  it('has a type of UPDATE_AQUQRIUM,', () => {
    const expected = {
      type: constants.updateAquarium.request,
    }
    expect(actions.updateAquarium()).toEqual(expected)
  })
})

describe('deleteAquarium action', () => {
  it('has a type of DELETE_AQUQRIUM,', () => {
    const expected = {
      type: constants.deleteAquarium.request,
    }
    expect(actions.deleteAquarium()).toEqual(expected)
  })
})

describe('showModal action', () => {
  it('has a type of SHOW_MODAL,', () => {
    const expected = {
      type: constants.showModal.request,
    }
    expect(actions.showModal()).toEqual(expected)
  })
})

describe('clearFormErrors action', () => {
  it('has a type of CLEAR_FORM_ERRORS,', () => {
    const expected = {
      type: constants.clearFormErrors.request,
    }
    expect(actions.clearFormErrors()).toEqual(expected)
  })
})
