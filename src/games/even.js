import { getRandom, isEven } from "../utilites.js";
import run from "../index.js";

const brainEven = () => {
  const defaultConfig = {
    min: 0,
    max: 100,
    count: 3,
  };
  const { min, max, count } = defaultConfig;
  const greetingMessage = 'Answer "yes" if number even otherwise answer "no".';
  const number = getRandom(min, max);
  const correctAnswer = ((n) => (isEven(n) ? "yes" : "no"))(number);
  const question = `${number}`;
  return { greetingMessage, question, correctAnswer, count };
};

export default () => {
  run(brainEven);
};
