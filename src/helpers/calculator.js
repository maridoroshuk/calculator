function Calculator() {
  this.value = 0
  this.history = []

  this.execute = function(command, prev, cur) {
    this.value = command.execute(prev, cur)
    this.history.push(command)
  }

  this.undo = function() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}

function Add() {
  this.execute = function(prev, cur) {
    return prev + cur
  }

  this.undo = function(prev, cur) {
    return cur - prev
  }
}

function Subtract() {
  this.execute = function(prev, cur) {
    return prev - cur
  }

  this.undo = function(prev, cur) {
    return prev + cur
  }
}

function Multiply() {
  this.execute = function(prev, cur) {
    return prev * cur
  }

  this.undo = function(prev, cur) {
    return cur / prev
  }
}

function Divide() {
  this.execute = function(prev, cur) {
    return prev / cur
  }

  this.undo = function(prev, cur) {
    return prev * cur
  }
}

function Remainde() {
  this.execute = function(prev, cur) {
    return prev % cur
  }
}

export const add = (prev, cur) => {
  const calculator = new Calculator()
  calculator.execute(new Add(), prev, cur)
  return calculator.value
}

export const subtract = (prev, cur) => {
  const calculator = new Calculator()
  calculator.execute(new Subtract(), prev, cur)
  return calculator.value
}

export const multiply = (prev, cur) => {
  const calculator = new Calculator()
  calculator.execute(new Multiply(), prev, cur)
  return calculator.value
}
export const divide = (prev, cur) => {
  const calculator = new Calculator()
  calculator.execute(new Divide(), prev, cur)
  return calculator.value
}
export const remainde = (prev, cur) => {
  const calculator = new Calculator()
  calculator.execute(new Remainde(), prev, cur)
  return calculator.value
}
