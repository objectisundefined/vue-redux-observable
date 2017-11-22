import { combineEpics } from 'redux-observable'

import ping from './ping'

export default combineEpics(
  ping
)
