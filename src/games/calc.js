import { startGame, randomNum } from '../index';

const discription = 'What is the result of the expression?';

const generateQuestion = () => {

  const operations = (num1, num2, oper) => {
    switch (oper) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default: brake;
    }
  };

  const operators = ['+', '-', '*'];
  const randOper = operators[randomNum(0, operators.length)];

  const numberOne = randomNum(1, 99);
  const numberTwo = randomNum(1, 99);

  const question = `${numberOne} ${randOper} ${numberTwo}`;
  const correctAnswer = () => String(operations(numberOne, numberTwo, randOper));
  return [question, correctAnswer];
};

const brainCalc = () => startGame(discription, generateQuestion);

export default brainCalc;
