import {
  CHECKPOINT_STATUS,
  submitted,
  newCheckpoint,
  reviewed,
  approved,
  closed,
} from 'shared/constants'

export const getStatusMessageId = (status, owner) => {
  if (status === submitted && !owner) {
    return newCheckpoint
  }
  if ((status === submitted || status === reviewed) && owner) {
    return CHECKPOINT_STATUS[reviewed].key
  }
  if (status === approved) {
    return CHECKPOINT_STATUS[approved].key
  }
  if (status === closed) {
    return CHECKPOINT_STATUS[closed].key
  }
  return null
}
