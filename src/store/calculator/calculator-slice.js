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
      if (
        payload.prevOperand &&
        payload.operation &&
        payload.curOperand
      ) {
        state.history = [
          ...state.history,
          `${payload.prevOperand} ${payload.operation} ${payload.curOperand}`,
        ]
      }
    },
    clearHistory(state) {
      state.history = []
    },
  },
})

export const calculatorActions = calculatorSlice.actions

export default calculatorSlice.reducer
