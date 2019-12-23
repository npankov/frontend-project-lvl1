import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log();

  for (let currentRound = 1; currentRound <= roundsCount; currentRound += 1) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default startGame;
