export function calculateValue(first, operator, second) {
  switch (operator) {
    case '+':
      return Number(first) + Number(second)
    case '-':
      return Number(first) - Number(second)
    case '*':
      return Number(first) * Number(second)
    case '/':
      return Number(first) / Number(second)
    default:
      return null
  }
}
