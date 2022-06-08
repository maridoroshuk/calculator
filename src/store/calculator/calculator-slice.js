import { calculate } from '../../utils/calculate'
import { createSlice, current } from '@reduxjs/toolkit'

const localData = JSON.parse(
  localStorage.getItem('history'),
)

console.log(localData)

const initialState = {
  overwrite: false,
  curOperand: null,
  operation: null,
  prevOperand: null,
  history: localData ?? [],
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit(state, { payload }) {
      if (
        payload.digit === '.' &&
        state.curOperand === null
      ) {
        console.log(payload.digit)
        state.curOperand = `0${payload.digit}`
      } else if (state.overwrite) {
        state.curOperand = payload.digit
        state.overwrite = false
      } else if (
        payload.digit === '0' &&
        state.curOperand === '0'
      ) {
        return state
      } else if (
        payload.digit === '.' &&
        state.curOperand.includes('.')
      ) {
        return state
      } else {
        state.curOperand = `${state.curOperand || ''}${
          payload.digit
        }`
      }
    },
    chooseOperation(state, { payload }) {
      if (
        state.curOperand == null &&
        state.prevOperand == null
      ) {
        return state
      } else if (state.curOperand == null) {
        state.operation = payload.operation
      } else if (state.prevOperand == null) {
        state.operation = payload.operation
        state.prevOperand = state.curOperand
        state.curOperand = null
      } else {
        state.prevOperand = calculate(state)
        state.operation = payload.operation
        state.curOperand = null
      }
    },
    evaluate(state, { payload }) {
      if (
        state.operation == null ||
        state.curOperand == null ||
        state.prevOperand == null
      ) {
        return state
      } else {
        state.history = [
          ...state.history,
          `${state.prevOperand} ${state.operation} ${state.curOperand}`,
        ]
        state.curOperand = calculate(state)
        state.overwrite = true
        state.prevOperand = null
        state.operation = null
      }
    },
    clear(state) {
      state.overwrite = false
      state.curOperand = null
      state.operation = null
      state.prevOperand = null
    },
    deleteDigit(state, { payload }) {
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
    },
    clearHistory(state) {
      state.history = []
    },
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
