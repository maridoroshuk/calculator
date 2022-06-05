import { calculateValue } from '../../utils/calculateValue'
import { createSlice, current } from '@reduxjs/toolkit'
// operations

const initialState = {
  value: 0,
  operator: null,
  nextValue: null,
  result: null,
  input: '',
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setOperator(state, { payload }) {
      if (payload !== '=') {
        const {
          value,
          operator,
          nextValue,
          result,
          input,
        } = state
        const expression = calculateValue(
          Number(value),
          operator,
          Number(input),
        )

        if (result) {
          return {
            ...initialState,
            value: state.result,
            operator: payload,
          }
        }

        if (nextValue === null && state.value !== null) {
          return input
            ? {
                ...initialState,
                value: expression,
                operator: payload,
              }
            : { ...initialState, value, operator: payload }
        }

        return value === null
          ? {
              ...initialState,
              value: Number(state.input),
              operator: payload,
            }
          : {
              ...initialState,
              nextValue: Number(state.input),
              operator: payload,
            }
      }
    },
    getResult(state, { payload }) {
      const { operator, result } = state
      if (payload) {
        state.nextValue = Number(payload)
      } else if (state.input) {
        return {
          ...state,
          nextValue: Number(state.input),
          input: '',
        }
      }
      if (result || result === 0) {
        state.value = result
      }

      state.result = this.getResult(
        state.value,
        operator,
        state.nextValue,
      )
    },

    resetOperaton() {
      return { ...initialState }
    },
    setDot(state) {
      const prevState = state.input
      if (prevState.includes('.')) return
      return prevState === ''
        ? { ...state, input: '0.' }
        : { ...state, input: prevState + '.' }
    },
    removeNumber(state) {
      const prevState = state.input
      state.input = prevState.slice(0, prevState.length - 1)
    },
    addNumber(state, { payload }) {
      if (!Number(payload) && payload !== '0') return state
      if (state.result || state.input === '0') {
        return { ...initialState, input: String(payload) }
      }
      if (state.input.length > 45) return
      state.input += String(payload)
    },
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
