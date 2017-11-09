import deepFreeze from 'deep-freeze'
import C from '../constants'
import { sort } from './reducers'

describe('Sort Reducer', () => {

  it('SORT_COLORS success', () => {
    const state = 'SORTED_BY_DATE'
    const action = {
      type: C.SORT_COLORS,
      sortBy: 'title'
    }
    const expected = 'SORTED_BY_TITLE'

    deepFreeze(state)
    deepFreeze(action)

    const result = sort(state, action)
    expect(result).toEqual(expected)
  })

})
