import startGame from '../index';
import randomNum from '../utils';

const discription = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const numberOne = randomNum(1, 99);
  const numberTwo = randomNum(1, 99);

  const gcd = (a, b) => {
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    return a;
  };

  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(gcd(numberOne, numberTwo));
  return [question, correctAnswer];
};

const brainGcd = () => startGame(discription, generateGameData);

export default brainGcd;
