// Returns the greatest common divisor of two vectors.
const gcd = (a, b) => (!b ? a : gcd(b, a % b));

// Generates a random number between min and max.
const getRandom = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Checks if a number is an even number.
const isEven = (number) => number % 2 === 0;

// Checks if a number is a prime number.
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
export {
  isEven,
  getRandom,
  gcd,
  isPrime,
};
