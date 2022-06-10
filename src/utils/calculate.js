export function calculate({
  curOperand,
  prevOperand,
  operation,
}) {
  const prev = parseFloat(prevOperand)
  const current = parseFloat(curOperand)

  if (isNaN(prev) || isNaN(current)) return ''

  const calculator = new Calculator()

  const add = val => {
    calculator.execute(new Add(val))
    return calculator.value
  }

  const substract = val => {
    calculator.execute(new Substract(val))
    return calculator.value
  }

  const multiply = val => {
    calculator.execute(new Multiply(val))
    return calculator.value
  }
  const divide = val => {
    calculator.execute(new Divide(val))
    return calculator.value
  }
  const remainde = val => {
    calculator.execute(new Remainde(val))
    return calculator.value
  }

  add(prev)

  let computation = ''

  switch (operation) {
    case '+':
      computation = add(current)
      break
    case '-':
      computation = substract(current)
      break
    case '*':
      computation = multiply(current)
      break
    case '/':
      computation = divide(current)
      break
    case '%':
      computation = remainde(current)
      break
    default:
      return null
  }

  if (!(computation % 1 === 0)) {
    computation = computation.toFixed(3)
  }

  return computation.toString()
}

function Calculator(command) {
  this.value = 0
  this.history = []

  this.execute = function(command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  this.undo = function() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}

function Add(valueToAdd) {
  this.valueToAdd = valueToAdd

  this.execute = function(currentValue) {
    return currentValue + this.valueToAdd
  }

  this.undo = function(currentValue) {
    return currentValue - this.valueToAdd
  }
}

function Substract(valueToSubstract) {
  this.valueToSubstract = valueToSubstract

  this.execute = function(currentValue) {
    return currentValue - this.valueToSubstract
  }

  this.undo = function(currentValue) {
    return currentValue + this.valueToSubstract
  }
}

function Multiply(valueToMultiply) {
  this.valueToMultiply = valueToMultiply

  this.execute = function(currentValue) {
    return currentValue * this.valueToMultiply
  }

  this.undo = function(currentValue) {
    return currentValue / this.valueToMultiply
  }
}

function Divide(valueToDivide) {
  this.valueToDivide = valueToDivide

  this.execute = function(currentValue) {
    return currentValue / this.valueToDivide
  }

  this.undo = function(currentValue) {
    return currentValue * this.valueToDivide
  }
}

function Remainde(valueToRemainde) {
  this.valueToRemainde = valueToRemainde

  this.execute = function(currentValue) {
    return currentValue % this.valueToRemainde
  }
}
