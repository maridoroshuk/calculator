export function calculate({
  curOperand,
  prevOperand,
  operation,
}) {
  const prev = parseFloat(prevOperand)
  const current = parseFloat(curOperand)

  if (isNaN(prev) || isNaN(current)) return ''

  let computation = ''

  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '/':
      computation = prev / current
      break
    default:
      return null
  }

  return computation.toString()
}
