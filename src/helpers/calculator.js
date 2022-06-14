import {
  addRes,
  divRes,
  mulRes,
  remRes,
  subRes,
} from './mathOperations'

const Command = function(execute, undo, prev, cur) {
  this.execute = execute
  this.undo = undo
  this.prev = prev
  this.cur = cur
}

function AddCommand(prev, cur) {
  return new Command(addRes, subRes, prev, cur)
}

function SubCommand(prev, cur) {
  return new Command(subRes, addRes, prev, cur)
}

function MulCommand(prev, cur) {
  return new Command(mulRes, divRes, prev, cur)
}

function DivCommand(prev, cur) {
  return new Command(divRes, mulRes, prev, cur)
}

function RemCommand(prev, cur) {
  return new Command(remRes, mulRes, prev, cur)
}

function Calculator() {
  const commands = []
  let result = null

  return {
    execute: function(command) {
      result = command.execute(command.prev, command.cur)
      commands.push(command)
    },

    undo: function() {
      const command = commands.pop()
      result = command.undo(command.prev, command.cur)
    },

    getCurrentValue: function() {
      return result
    },
  }
}

const calculator = new Calculator()

export const add = (prev, cur) => {
  calculator.execute(new AddCommand(prev, cur))
  return calculator.getCurrentValue()
}

export const subtract = (prev, cur) => {
  calculator.execute(new SubCommand(prev, cur))
  return calculator.getCurrentValue()
}
export const multiply = (prev, cur) => {
  calculator.execute(new MulCommand(prev, cur))
  return calculator.getCurrentValue()
}
export const divide = (prev, cur) => {
  calculator.execute(new DivCommand(prev, cur))
  return calculator.getCurrentValue()
}
export const remainde = (prev, cur) => {
  calculator.execute(new RemCommand(prev, cur))
  return calculator.getCurrentValue()
}
