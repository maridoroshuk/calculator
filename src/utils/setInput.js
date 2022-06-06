import { calculatorActions } from '../store/calculator/calculator-slice'

import store from '../store'

export const setInput = (curInput, symbol, operator) => {
  const dispatch = action => {
    store.dispatch(action)
  }

  const currentSymbol = symbol === '=' ? '=' : symbol

  switch (currentSymbol) {
    case 'C':
      return dispatch(calculatorActions.removeNumber())
    case '.':
      return dispatch(calculatorActions.setDot())
    case '=':
      if (operator && curInput) {
        return dispatch(
          calculatorActions.getResult(curInput),
        )
      }
      break
    default:
      dispatch(calculatorActions.setOperator(currentSymbol))
  }
}
