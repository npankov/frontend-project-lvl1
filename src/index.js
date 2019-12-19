import readlineSync from 'readline-sync';

const maxRound = 3;

const startGame = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log();

  for (let countRound = 1; countRound <= maxRound; countRound += 1) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      if (countRound === maxRound) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default startGame;
