import types from './types'

export default {
  [types.SETPENDINAG] (state, num) {
    state ['pendingLength'] += num
  }
}