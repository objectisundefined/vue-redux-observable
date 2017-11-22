import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'

const logger = ({ dispatch, getState }) => next => action => {
  console.log('in action:', action, 'state:', getState())
  next(action)
  console.log('out action:', action, 'state:', getState())
}

const store = createStore(reducer, applyMiddleware(logger))

export default store
