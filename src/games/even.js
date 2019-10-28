import startGame from '../index';
import randomNum from '../utils';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = randomNum(1, 99);
  const isEven = () => ((question % 2 === 0) ? 'yes' : 'no');
  const correctAnswer = isEven();
  return [question, correctAnswer];
};

const evenGame = () => startGame(discription, generateGameData);

export default evenGame;
