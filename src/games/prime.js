import startGame from '../index';
import randomNum from '../utils';

const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const isPrime = (num) => {
    if (num > 1) {
      for (let i = 2; i <= num; i += 1) {
        if (num % i === 0) {
          if (num === i) {
            return true;
          } return false;
        }
      }
    } return false;
  };

  const question = randomNum(1, 99);
  const correctAnswer = ((isPrime(question) === true) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const primeGame = () => startGame(discription, generateGameData);

export default primeGame;
