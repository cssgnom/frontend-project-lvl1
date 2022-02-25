import readline from 'readline-sync';

const defaultHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

export default defaultHello;
