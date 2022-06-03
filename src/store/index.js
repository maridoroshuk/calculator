import { configureStore } from '@reduxjs/toolkit'
import expressionReducer from './expression-slice'

const store = configureStore({
  reducer: {
    expression: expressionReducer,
  },
})

export default store
