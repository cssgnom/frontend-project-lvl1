import readline from "readline-sync";

export default (fn) => {
  const { greetingMessage, count } = fn();
  console.log("Welcome to the Brain Games!");
  const name = readline.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);
  console.log(greetingMessage);
  for (let i = 0; i < count; i += 1) {
    const { question, correctAnswer } = fn();
    console.log(`Question: ${question}`);
    const answer = readline.question(`Your answer: `);
    console.dir(answer);
    console.dir(correctAnswer);
    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      return;
    }
    console.log(`Correct!`);
  }
  console.log(`Congratulations, ${name}!`);
};
