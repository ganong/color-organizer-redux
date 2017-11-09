import React from 'react'
import moment from 'moment'
import { sortMap } from './constants'

import Card from './components/Card'
import NewColorForm from './components/NewColorForm'
import Sort from './components/Sort'

const onSubmit = addColor => event => {
  event.preventDefault()

  const title = event.target.title.value
  const color = event.target.color.value

  addColor(title, color)
}

const makeSort = sortBy => (c1, c2) => {
  switch (sortBy) {
    case sortMap.rating:
      // sort ratings descending
      return c2.rating > c1.rating

    case sortMap.title:
      // sort titles ascending
      return c1.title.toLowerCase() > c2.title.toLowerCase()

    case sortMap.date:
      return moment(c2.timestamp).diff(c1.timestamp)

    default:
      return 1
  }
}

const App = ({ state, removeColor, addColor, rateColor, sortColors }) => (
  <div>
    <Sort sortColors={sortColors} sortVal={state.sort} />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', alignContent: 'space-around' }}>
      {state.colors.sort(makeSort(state.sort)).map(color => (
        <Card 
          key={color.id} 
          color={color} 
          rateColor={rateColor.bind(null, color.id)}
          onClick={() => {console.log('click'); removeColor(color.id);}} 
        />
      ))}
    </div>
    <NewColorForm onSubmit={onSubmit(addColor)} />
  </div>
)

export default App
