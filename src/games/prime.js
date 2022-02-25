import run from "../index.js";
import { isPrime, getRandom } from "../utilites.js";

const brainPrime = (obj = { min: 1, max: 15, count: 3 }) => {
  const { min, max, count } = obj;
  const greetingMessage =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  const number = getRandom(min, max);
  const correctAnswer = ((n) => (isPrime(n) ? "yes" : "no"))(number);
  const question = `${number}`;
  return { greetingMessage, question, correctAnswer, count };
};

export default () => {
  run(brainPrime);
};
