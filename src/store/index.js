import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducer from './reducer'
import epic from './epic'

const logger = ({ dispatch, getState }) => next => action => {
  console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', getState())
  console.log('%c action', 'color: #03A9F4; font-weight: bold', action)

  next(action)

  console.log('%c next state', 'color: #4CAF50; font-weight: bold', getState())
}

const store = createStore(reducer, applyMiddleware(logger, createEpicMiddleware(epic)))

export default store
