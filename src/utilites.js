const isEven = (number) => number % 2 === 0;

const getRandom = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

export { isEven, getRandom };
