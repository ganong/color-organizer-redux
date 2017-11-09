import React from 'react'
import { sortMap, sortMapReverse } from '../constants'


const handleSortChange = sortColors => ({ target: { value: sortBy } }) =>
sortColors(sortBy)

const Sort = ({ sortColors, sortVal}) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <label>
      Sort: 
      <select onChange={handleSortChange(sortColors)} value={sortMapReverse[sortVal]}>
        {Object.keys(sortMap).map(sort => (
          <option key={sort} value={sort}>{sort}</option>
        ))}
      </select>
    </label>
  </div>
)

export default Sort
