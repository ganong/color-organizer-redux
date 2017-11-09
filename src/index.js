import React from 'react'
import ReactDOM from 'react-dom'
import debounce from 'debounce'
import storeFactory from './store'

import { addColor, removeColor, rateColor, sortColors } from './actions'
import App from './App'


const confirmer = store => next => action => {
  if (window.confirm(`Are you sure you want to dispatch action ${action.type}?`)) {
    return next(action)
  }
  
  console.log(`User chose to not continue with dispatching action ${action.type}.`)
}

const logger = store => next => action => {
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action);

  let result = next(action)

  console.log('next state', store.getState());
  console.groupEnd()

  return result
}


const initState = window.localStorage['redux-store'] 
  ? JSON.parse(window.localStorage['redux-store'])
  : {}

const store = storeFactory(initState, [confirmer, logger])

window.store = store

const makeDispatcher = fn => (...args) => store.dispatch(fn(...args))

const addColorDispatch = makeDispatcher(addColor)
const removeColorDispatch = makeDispatcher(removeColor)
const rateColorDispatch = makeDispatcher(rateColor)
const sortColorsDispatch = makeDispatcher(sortColors)


const render = state => {
  ReactDOM.render(
    <App 
      state={state} 
      addColor={addColorDispatch} 
      removeColor={removeColorDispatch}
      rateColor={rateColorDispatch} 
      sortColors={sortColorsDispatch} 
    />,
    document.getElementById('root')
  )
}

render(store.getState())

store.subscribe(() => render(store.getState()))

store.subscribe(
  debounce(
    () => {
      window.localStorage['redux-store'] = JSON.stringify(store.getState())
    },
    1000
  )
)
