import readlineSync from 'readline-sync';


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log();

export const userName = readlineSync.question('May I have your name? ');

export const greeting = () => {
  console.log(`Hi ${userName}!`);
  console.log();
};


export const brainEven = () => {
  const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');
  const rounds = 3;
  for (let i = 1; i <= rounds; i += 1) {
    const randomNum = Math.floor(Math.random() * 99);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(randomNum) === answer) {
      console.log('Correct!');
      if (i === rounds) {
        return console.log(`Congratulations, ${userName}`);
      }
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${isEven(randomNum)}.\nLet's try again, ${userName}!`);
    }
  }
};
