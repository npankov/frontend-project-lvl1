import readlineSync from 'readline-sync';

const startGame = (discription, generateGameData) => {
  const maxRound = 3;

  console.log('Welcome to the Brain Games!');
  console.log(discription);
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
        return console.log(`Congratulations, ${userName}`);
      }
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    }
  }
};

export default startGame;
