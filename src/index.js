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
    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Correct!`);
  }
  console.log(`Congratulations, ${name}!`);
};
