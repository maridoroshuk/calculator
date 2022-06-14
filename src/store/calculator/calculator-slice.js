import { calculate } from '../../utils/calculate'
import { createSlice } from '@reduxjs/toolkit'

const localData = JSON.parse(
  localStorage.getItem('history'),
)

const initialState = {
  history: localData ?? [],
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addHistory(state, { payload }) {
      state.history = [
        ...state.history,
        `${payload.prevOperand} ${payload.operation} ${payload.curOperand}`,
      ]
    },
    clearHistory(state) {
      state.history = []
    },
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
