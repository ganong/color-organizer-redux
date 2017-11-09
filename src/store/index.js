import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const alerter = store => next => action => {
  alert(`dispatching ${action.type}`)
  return next(action)
}

// const stopper = store => next => action => {
//   console.log('nope')
// }

// const bgSetter = store => next => action => {
//   document.body.style.backgroundColor = action.color
//   return next(action)
// }

const storeFactory = (initState = {}, middleware = []) => 
  applyMiddleware(...middleware, alerter)(createStore)(reducer, initState)

export default storeFactory
