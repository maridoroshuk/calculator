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
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
