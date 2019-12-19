import { COLOR_HEX_CODE } from 'shared/constants'
export const isBackgroundColorValid = backgroundColor =>
  COLOR_HEX_CODE.test(backgroundColor)
