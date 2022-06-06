import { calculate } from '../../utils/calculate'
import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  overwrite: false,
  curOperand: null,
  operation: null,
  prevOperand: null,
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit(state, { payload }) {
      if (state.overwrite) {
        return {
          ...state,
          curOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === '0' && state.curOperand === '0')
        return state
      if (
        payload.digit === '.' &&
        state.curOperand.includes('.')
      )
        return state
      return {
        ...state,
        curOperand: `${state.curOperand || ''}${
          payload.digit
        }`,
      }
    },
    chooseOperation(state, { payload }) {
      if (
        state.curOperand == null &&
        state.prevOperand == null
      ) {
        return state
      }

      if (state.curOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.curOperand,
          curOperand: null,
        }
      }

      return {
        ...state,
        prevOperand: calculate(state),
        operation: payload.operation,
        curOperand: null,
      }
    },
    evaluate(state, { payload }) {
      if (
        state.operation == null ||
        state.curOperand == null ||
        state.prevOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        prevOperand: null,
        operation: null,
        curOperand: calculate(state),
      }
    },
    clear(state) {
      return initialState
    },
    deleteDigit(state, { payload }) {
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          curOperand: null,
        }
      }
      if (state.curOperand == null) return state
      if (state.curOperand === 1) {
        return {
          ...state,
          curOperand: null,
        }
      }

      return {
        ...state,
        curOperand: state.curOperand.slice(0, -1),
      }
    },
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
