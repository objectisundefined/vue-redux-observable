import { combineReducers } from 'redux'

import counter from './counter'
import ping from './ping'

export default combineReducers({
  counter,
  ping
})
