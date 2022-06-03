const { createSlice } = require('@reduxjs/toolkit')

const expressionSlice = createSlice({
  name: 'expression',
  initialState: {
    expression: '',
    value: '',
    history: [],
  },
  reducers: {
    clearHandler(state, action) {},
    operatorHandler(state, action) {
      const last =
        state.expression[state.expression.length - 1]
      if (
        last === '+' ||
        last === '-' ||
        last === '*' ||
        last === '/'
      ) {
        state.expression = state.expression
          .slice(0, -1)
          .concat(action.payload)
      } else {
        // dispatch(pushToInputHandler(action.payload))
      }
    },
    decimalHandler(state, action) {},
    equalsHandler(state, action) {},
    bracketHandler(state, action) {},
    pushToInputHandler(state, action) {
      if (
        state.expression === '0' &&
        action.payload === '0'
      ) {
        state.expression = 0
      } else if (
        state.expression === '0' &&
        action.payload === '.'
      ) {
        state.expression = 0
      }
      state.expression = state.expression.concat(
        action.payload,
      )
    },
  },
})

export const expressionActions = expressionSlice.actions
export default expressionSlice.reducer
