import startGame from '../index';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;

const getProgression = (firstElem, increase, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr[i] = firstElem + increase * i;
  }
  return arr;
};

const generateGameData = () => {
  const numStartProgression = randomNum(1, 99);
  const increaseProgression = randomNum(1, 15);
  const randomIndex = randomNum(0, lengthProgression);
  const progression = getProgression(numStartProgression, increaseProgression, lengthProgression);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const brainPregression = () => startGame(description, generateGameData);

export default brainPregression;
