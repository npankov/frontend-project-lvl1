import { startGame, randomNum } from '../index';

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const question = randomNum(1, 99);
  const correctAnswer = ((question % 2 === 0) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const evenGame = () => startGame(discription, generateQuestion);

export default evenGame;
