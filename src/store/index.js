import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculator/calculator-slice'
import themeReducer from './theme/theme-slice'

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
  },
})

export default store
