import * as Types from '../types'

const epic = action$ =>
  action$.ofType(Types.PING)
    .delay(1000)
    .mapTo({ type: Types.PONG })

export default epic
