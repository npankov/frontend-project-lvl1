import startGame from '../index';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;

const getProgression = (firstElement, increase, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = firstElement + increase * i;
  }
  return result;
};

const generateGameData = () => {
  const firstElement = randomNum(1, 99);
  const increase = randomNum(1, 15);
  const randomIndex = randomNum(0, lengthProgression);
  const progression = getProgression(firstElement, increase, lengthProgression);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const brainPregression = () => startGame(description, generateGameData);

export default brainPregression;
