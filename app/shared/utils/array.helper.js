import { clone } from 'lodash'
export const unflattenArray = (oldArray, size) => {
  const newArray = []
  const arrayToTreated = clone(oldArray)
  while (arrayToTreated.length > 0)
    newArray.push(arrayToTreated.splice(0, size))
  return newArray
}

export const isFirstIndex = index => index === 0
// the max value of our index is array.length and not arry.length -1
export const isLastIndex = (index, array) => index === array.length

export const isContainingAtLeastOneElement = array => array.length > 1

export const getElementDataToUpdate = (elementsList, elementToUpdateId) =>
  elementsList.find(element => element.id === elementToUpdateId)

export const sortArray = array => {
  const draft = [...array]
  return draft.sort((sortByValue1, sortByValue2) => sortByValue2 - sortByValue1)
}

export const createFakeArrayForLoading = (length, fakeObject = {}) =>
  Array.from({ length }, () => fakeObject)

export const arrayToRenderInLoading = (
  loading,
  array,
  fakaObject,
  numberOfFakeObjects,
) => {
  if (loading) {
    return createFakeArrayForLoading(numberOfFakeObjects, fakaObject)
  }
  return array
}
