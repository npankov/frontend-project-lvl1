import startGame from '../index';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const generateGameData = () => {
  const firstNumber = randomNum(1, 99);
  const secondNumber = randomNum(1, 99);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const brainGcd = () => startGame(description, generateGameData);

export default brainGcd;
