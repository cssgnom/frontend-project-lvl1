// import pairs from "@hexlet/pairs";
import { getRandom } from "../utilites.js";
import run from "../index.js";

const mathOperations = {
  "+": (a, b) => String(a + b),
  "-": (a, b) => String(a - b),
  "*": (a, b) => String(a * b),
};

const brainCalculator = (obj = { min: 0, max: 50, count: 3 }) => {
  const { min, max, count } = obj;
  const greetingMessage = "What is the result of the expression?";
  const operators = Object.keys(mathOperations);
  const firstNumber = getRandom(min, max);
  const secondNumber = getRandom(min, max);
  const operator = operators.at(getRandom(0, operators.length - 1));
  const correctAnswer = mathOperations[operator](firstNumber, secondNumber);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return { greetingMessage, question, correctAnswer, count };
};

export default () => {
  run(brainCalculator);
};
