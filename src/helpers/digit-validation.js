import { calculate } from '../utils/calculate'

export const state = {
  overwrite: false,
  curOperand: null,
  prevOperand: null,
  operation: null,
}

export function addDigit(digit) {
  if (state.overwrite) {
    state.curOperand = digit
    state.overwrite = false

    return state
  } else if (digit === '0' && state.curOperand === '0') {
    return state
  } else if (
    digit === '.' &&
    state.curOperand.includes('.')
  ) {
    return state
  } else {
    state.curOperand = `${state.curOperand || ''}${digit}`
    return state
  }
}

export function chooseOperation(operation) {
  if (
    state.curOperand === null &&
    state.prevOperand === null
  ) {
    return state
  } else if (state.curOperand === null) {
    state.operation = operation
    return state
  } else if (state.prevOperand === null) {
    state.operation = operation
    state.prevOperand = state.curOperand
    state.curOperand = null
    return state
  } else {
    state.prevOperand = calculate(state)
    state.operation = operation
    state.curOperand = null
    return state
  }
}
