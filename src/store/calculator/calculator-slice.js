import { calculate } from '../../utils/calculate'
import { createSlice, current } from '@reduxjs/toolkit'

const localData = JSON.parse(
  localStorage.getItem('history'),
)

const initialState = {
  overwrite: false,
  expression: '',
  history: localData ?? [],
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit(state, { payload }) {
      if (
        payload.digit === '.' &&
        state.expression === ''
      ) {
        state.expression = `0${payload.digit}`
      } else if (state.overwrite) {
        state.expression = payload.digit
        state.overwrite = false
      } else if (
        payload.digit === '0' &&
        state.expression === '0'
      ) {
        return state
      } else if (
        payload.digit === '.' &&
        state.expression.includes('.')
      ) {
        return state
      } else {
        state.expression = `${state.expression || ''}${
          payload.digit
        }`
      }
    },
    evaluate(state, { payload }) {
      state.history = [
        ...state.history,
        `${state.expression}`,
      ]
      state.overwrite = true
      state.expression = calculate(state.expression)
      state.operation = null
    },
    clear(state) {
      state.overwrite = false
      state.expression = ''
      state.operation = null
    },
    deleteDigit(state, { payload }) {
      if (state.overwrite) {
        state.overwrite = false
        state.expression = ''
      } else if (state.expression === '') {
        return state
      } else if (state.expression === 1) {
        state.expression = ''
      } else {
        state.expression = state.expression.slice(0, -1)
      }
    },
    clearHistory(state) {
      state.history = []
    },
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
