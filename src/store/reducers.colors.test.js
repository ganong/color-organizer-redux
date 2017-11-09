import deepFreeze from 'deep-freeze'
import C from '../constants'
import { colors, colorsNormalized } from './reducers'

describe('Colors Reducer', () => {

  it('ADD_COLOR success', () => {
    const state = []
    const action = {
      type: C.ADD_COLOR,
      id: '111',
      title: 'Test Teal',
      color: '#000000',
      timestamp: new Date().toString()
    }
    const expected = [
      {
        id: '111',
        title: 'Test Teal',
        color: '#000000',
        rating: 0,
        timestamp: action.timestamp
      }
    ]

    deepFreeze(state)
    deepFreeze(action)

    const result = colors(state, action)
    expect(result).toEqual(expected)
  })

  it('RATE_COLOR success', () => {
    const state = [
      {
        id: '111',
        title: 'Test Teal',
        color: '#000000',
        rating: 0,
        timestamp: new Date().toString()
      }
    ]
    const action = {
      type: C.RATE_COLOR,
      id: '111',
      rating: 3,
    }
    const expected = [
      {
        ...state[0],
        rating: 3,
      }
    ]

    deepFreeze(state)
    deepFreeze(action)

    const result = colors(state, action)
    expect(result).toEqual(expected)
  })

  it('REMOVE_COLOR success', () => {
    const state = [
      { id: '111' }
    ]
    const action = {
      type: C.REMOVE_COLOR,
      id: '111',
    }
    const expected = []

    deepFreeze(state)
    deepFreeze(action)

    const result = colors(state, action)
    expect(result).toEqual(expected)
  })

  describe('Colors Normalized Reducer', () => {
    
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
          '111': {
            id: '111',
            title: 'Test Teal',
            color: '#000000',
            rating: 0,
            timestamp: action.timestamp
          },
        }
    
        deepFreeze(state)
        deepFreeze(action)
    
        const result = colorsNormalized(state, action)
        expect(result).toEqual(expected)
      })
    
      it('RATE_COLOR success', () => {
        const state = {
          '111': {
            id: '111',
            title: 'Test Teal',
            color: '#000000',
            rating: 0,
            timestamp: new Date().toString()
          },
        }
        const action = {
          type: C.RATE_COLOR,
          id: '111',
          rating: 3,
        }
        const expected = {
          '111': {
            id: '111',
            title: 'Test Teal',
            color: '#000000',
            rating: 3,
            timestamp: new Date().toString()
          },
        }
    
        deepFreeze(state)
        deepFreeze(action)
    
        const result = colorsNormalized(state, action)
        expect(result).toEqual(expected)
      })
    
      it('REMOVE_COLOR success', () => {
        const state = {
          '111': { id: '111' }
        }
        const action = {
          type: C.REMOVE_COLOR,
          id: '111',
        }
        const expected = {}
    
        deepFreeze(state)
        deepFreeze(action)
    
        const result = colorsNormalized(state, action)
        expect(result).toEqual(expected)
      })
    
    })

})
