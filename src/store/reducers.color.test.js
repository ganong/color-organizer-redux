import deepFreeze from 'deep-freeze'
import C from '../constants'
import { color } from './reducers'

describe('Color Reducer', () => {

  it('ADD_COLOR success', () => {
    const state = {}
    const action = {
      type: C.ADD_COLOR,
      id: '111',
      title: 'Test Teal',
      color: '#000000',
      timestamp: new Date().toString()
    }
    const expected = {
      id: '111',
      title: 'Test Teal',
      color: '#000000',
      rating: 0,
      timestamp: action.timestamp
    }

    const result = color(state, action)
    expect(result).toEqual(expected)
  })

  it('RATE_COLOR success', () => {
    const state = {
      id: '111',
      title: 'Test Teal',
      color: '#000000',
      rating: 0,
      timestamp: new Date().toString()
    }
    const action = {
      type: C.RATE_COLOR,
      id: '111',
      rating: 3,
    }
    const expected = {
      ...state,
      rating: 3,
    }

    deepFreeze(state)
    deepFreeze(action)

    const result = color(state, action)
    expect(result).toEqual(expected)
  })

})
