import readlineSync from 'readline-sync';

//min and max included 
export const randomNum = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const startGame = (discription, generateQuestion) => {
  const maxRound = 3;

  console.log('Welcome to the Brain Games!');
  console.log(discription);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log();

  for (let countRound = 1; countRound <= maxRound; countRound += 1) {
    // const question = generateQuestion();
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer(question) === userAnswer) {
      console.log('Correct!');
      if (countRound === maxRound) {
        return console.log(`Congratulations, ${userName}`);
      }
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer(question)}.\nLet's try again, ${userName}!`);
    }
  }
};
