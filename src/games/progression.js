import run from "../index.js";
import { getRandom } from "../utilites.js";

const brainProgression = () => {
  const defaultConfig = {
    min: 1,
    max: 10,
    progressLength: { min: 5, max: 10 },
    count: 3,
  };
  const { min, max, count } = defaultConfig;
  const { min: minLength, max: maxLength } = defaultConfig.progressLength;
  const greetingMessage = "What number is missing in the progression?";
  const start = getRandom(min, max * 10);
  const step = getRandom(min, max);
  const progression = Array.from(
    { length: getRandom(minLength, maxLength) },
    (_, i) => start + i * step
  );
  const randomIndex = getRandom(0, progression.length - 1);
  const correctAnswer = `${progression.at(randomIndex)}`;
  progression[randomIndex] = "..";
  const question = progression.join(" ");
  return { greetingMessage, question, correctAnswer, count };
};

export default () => {
  run(brainProgression);
};
