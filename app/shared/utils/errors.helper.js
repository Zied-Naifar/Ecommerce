import React from 'react'
import { isEmpty } from 'lodash'

export const renderArrayErrors = errors => {
  if (!isEmpty(errors)) {
    return errors.map(item => <div className="x-error-message">{item}</div>)
  }
  return false
}
