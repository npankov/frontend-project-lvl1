import startGame from '../index';
import randomNum from '../utils';

const discription = 'Find the greatest common divisor of given numbers.';

const numberOne = randomNum(1, 99);
const numberTwo = randomNum(1, 99);

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
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(gcd(numberOne, numberTwo));
  return [question, correctAnswer];
};

const brainGcd = () => startGame(discription, generateGameData);

export default brainGcd;
