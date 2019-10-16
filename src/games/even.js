import startGame from '../index';
import { randomNum } from '../index';


const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => randomNum();
const checkAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const evenGame = () => startGame(discription, generateQuestion, checkAnswer);

export default evenGame;
