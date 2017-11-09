import { createReducer } from 'redux-create-reducer';
import { combineReducers } from 'redux'
import C, { sortMap } from '../constants'


export const sort = createReducer(sortMap.rating, {
  [C.SORT_COLORS]: (state, action) => sortMap[action.sortBy]
})

export const color = createReducer({}, {
  [C.ADD_COLOR]: (state, action) => ({
    id: action.id,
    title: action.title,
    color: action.color,
    rating: 0,
    timestamp: action.timestamp,
  }),
  
  [C.RATE_COLOR]: (state, action) => ({
    ...state,
    rating: action.rating,
  }),
})

export const colors = createReducer([], {
  [C.ADD_COLOR]: (state, action) => [
    ...state,
    color({}, action),
  ],
    
  [C.RATE_COLOR]: (state, action) => state.map(c => {
    if (c.id !== action.id) {
      return c
    }
    return color(c, action)
  }),

  [C.REMOVE_COLOR]: (state, action) => state.filter(c => c.id !== action.id),
})

export const colorsNormalized = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
    case C.RATE_COLOR:
      return {
        ...state,
        [action.id]: color(state[action.id], action),
      }

    case C.REMOVE_COLOR: {
      const newState = { ...state }
      delete(newState[action.id])
      return newState
    }

    default:
      return state
  }
}

export default combineReducers({ colors, sort })
