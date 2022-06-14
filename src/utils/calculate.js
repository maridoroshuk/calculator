import {
  add,
  divide,
  multiply,
  remainde,
  subtract,
} from '../helpers/calculator'

export function calculate({
  curOperand,
  prevOperand,
  operation,
}) {
  const prev = parseFloat(prevOperand)
  const current = parseFloat(curOperand)

  if (isNaN(prev) || isNaN(current)) return ''

  let computation

  switch (operation) {
    case '+':
      computation = add(prev, current)
      break
    case '-':
      computation = subtract(prev, current)
      break
    case '*':
      computation = multiply(prev, current)
      break
    case '/':
      computation = divide(prev, current)
      break
    case '%':
      computation = remainde(prev, current)
      break
    default:
      return null
  }

  if (computation % 1 === 0) {
    return computation
  }

  return computation.toFixed(3)
}
