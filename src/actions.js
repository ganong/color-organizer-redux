import v4 from 'uuid/v4'
import moment from 'moment'
import C from './constants'

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  timestamp: moment().toISOString(),
  title,
  color,
})

export const removeColor = (id) => ({
  type: C.REMOVE_COLOR,
  id,
})

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating,
})

export const sortColors = (sortBy) => ({
  type: C.SORT_COLORS,
  sortBy,
})
