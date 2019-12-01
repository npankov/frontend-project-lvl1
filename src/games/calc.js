import startGame from '../index';
import randomNum from '../utils';

const discription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
  return null;
};

const generateGameData = () => {
  const randomOperator = operators[randomNum(0, operators.length)];
  const randomNumberOne = randomNum(1, 99);
  const randomNumberTwo = randomNum(1, 99);

  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
  const correctAnswer = String(operations(randomNumberOne, randomNumberTwo, randomOperator));
  return [question, correctAnswer];
};

const brainCalc = () => startGame(discription, generateGameData);

export default brainCalc;
