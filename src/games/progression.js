import startGame from '../index';
import randomNum from '../utils';

const discription = 'What number is missing in the progression?';

const numStartProgression = randomNum(1, 99);
const increaseProgression = randomNum(1, 15);
const lengthProgression = 10;
const randomIndex = randomNum(0, lengthProgression);

const getProgression = (firstElem, increase) => {
  const arr = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    arr[i] = firstElem + increase * i;
  }
  return arr;
};

const progression = getProgression(numStartProgression, increaseProgression);

const generateGameData = () => {
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const brainPregression = () => startGame(discription, generateGameData);

export default brainPregression;
