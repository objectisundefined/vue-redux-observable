import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducer from './reducer'
import epic from './epic'

const logger = ({ dispatch, getState }) => next => action => {
  console.log('in action:', action, 'state:', getState())
  next(action)
  console.log('out action:', action, 'state:', getState())
}

const store = createStore(reducer, applyMiddleware(logger, createEpicMiddleware(epic)))

export default store
