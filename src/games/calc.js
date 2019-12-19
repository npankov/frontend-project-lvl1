import startGame from '../index';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

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
  const randomOperator = operators[randomNum(0, operators.length - 1)];
  const firstNumber = randomNum(1, 99);
  const secondNumber = randomNum(1, 99);

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(operations(firstNumber, secondNumber, randomOperator));
  return [question, correctAnswer];
};

const brainCalc = () => startGame(description, generateGameData);

export default brainCalc;
