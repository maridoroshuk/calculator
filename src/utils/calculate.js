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
    return (currentValue + this.valueToAdd).toFixed(3)
  }

  this.undo = function(currentValue) {
    return currentValue - this.valueToAdd
  }
}

function Substract(valueToSubstract) {
  this.valueToSubstract = valueToSubstract

  this.execute = function(currentValue) {
    return (currentValue - this.valueToSubstract).toFixed(3)
  }

  this.undo = function(currentValue) {
    return currentValue + this.valueToSubstract
  }
}

function Multiply(valueToMultiply) {
  this.valueToMultiply = valueToMultiply

  this.execute = function(currentValue) {
    return (currentValue * this.valueToMultiply).toFixed(3)
  }

  this.undo = function(currentValue) {
    return currentValue / this.valueToMultiply
  }
}

function Divide(valueToDivide) {
  this.valueToDivide = valueToDivide

  this.execute = function(currentValue) {
    return (currentValue / this.valueToDivide).toFixed(3)
  }

  this.undo = function(currentValue) {
    return currentValue * this.valueToDivide
  }
}

const calculator = new Calculator()

export const add = val => calculator.execute(new Add(val))
export const substract = val =>
  calculator.execute(new Substract(val))
export const multiply = val =>
  calculator.execute(new Multiply(val))
export const divide = val =>
  calculator.execute(new Divide(val))
