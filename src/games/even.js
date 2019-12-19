import startGame from '../index';
import randomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = randomNum(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => startGame(description, generateGameData);

export default evenGame;
