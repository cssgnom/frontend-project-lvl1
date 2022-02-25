import { getRandom, gcd } from "../utilites.js";
import run from "../index.js";

const brainGcd = () => {
  const defaultConfig = {
    min: 1,
    max: 50,
    count: 3,
  };
  const { min, max, count } = defaultConfig;
  const greetingMessage = "Find the greatest common divisor of given numbers.";
  const firstNumber = getRandom(min, max);
  const secondNumber = getRandom(min, max);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${gcd(firstNumber, secondNumber)}`;
  return { greetingMessage, question, correctAnswer, count };
};

export default () => {
  run(brainGcd);
};
