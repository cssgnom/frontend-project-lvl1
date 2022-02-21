import readline from "readline-sync";
import isEven from "./isEven.js";
import getRandom from "./getRandom.js";

const validAnswer = (answer) => (answer ? "yes" : "no");

export default (obj = { min: 1, max: 100, count: 3 }) => {
  const { min, max, count } = obj;
  console.log("Welcome to the Brain Games!");
  const name = readline.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < count; i += 1) {
    const randomNumber = getRandom(min, max);
    console.log(`Question: ${randomNumber}`);
    const answer = readline.question(`Your answer: `);
    if (answer !== validAnswer(isEven(randomNumber))) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${validAnswer(
          isEven(randomNumber)
        )}'`
      );
      return;
    }
    console.log(`Correct!`);
  }
  console.log(`Congratulations, ${name}!`);
};
