import { calculate } from '../utils/calculate'

export const state = {
  overwrite: false,
  curOperand: null,
  prevOperand: null,
  operation: null,
}

export function addDigit(digit) {
  switch (digit) {
    case '±':
      if (state.curOperand == null) {
        return state
      } else if (!state.curOperand.includes('-')) {
        state.curOperand = `-${state?.curOperand}`
      }
      break
    case '.':
      if (state.curOperand === null) {
        state.curOperand = `0${digit}`
      } else if (state.curOperand.includes('.')) {
        return state
      } else if (state.overwrite) {
        state.curOperand = `0${digit}`
        state.overwrite = false
      } else {
        state.curOperand = `${state.curOperand ||
          ''}${digit}`
      }
      break
    case '0':
      if (state.curOperand === '0') {
        return state
      } else {
        state.curOperand = `${state.curOperand ||
          ''}${digit}`
      }
      break
    default:
      if (state.overwrite) {
        state.curOperand = digit
        state.overwrite = false
      } else {
        state.curOperand = `${state.curOperand ||
          ''}${digit}`
      }
  }

  return state
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

export function clear() {
  state.overwrite = false
  state.curOperand = null
  state.operation = null
  state.prevOperand = null

  return state
}

export function deleteDigit() {
  if (state.overwrite) {
    state.overwrite = false
    state.curOperand = null
  } else if (state.curOperand == null) {
    return state
  } else if (state.curOperand === 1) {
    state.curOperand = null
  } else {
    state.curOperand = state.curOperand.slice(0, -1)
  }

  return state
}

export function evaluate() {
  if (
    state.operation == null ||
    state.curOperand == null ||
    state.prevOperand == null
  ) {
    return state
  } else {
    state.curOperand = calculate(state)
    state.overwrite = true
    state.prevOperand = null
    state.operation = null
  }

  return state
}
