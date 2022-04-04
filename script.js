let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Step 3 Generates new secret target number for every new round
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
};

// Step 8a take two numbers and return the distance
const getAbsoluteDistance = (a, b) => Math.abs(a - b);

// Step 4 Determines which guess is closer to the target number or alerts if user guess is out of range
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Try using numbers between 0 and 9');
    } else if (getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
        return true;
    } else {
        return false;
    };
};

// Step 5 Increase the winner's score after every round
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

// Step 6 Update the round number after each round
const advanceRound = () => {
    currentRoundNumber += 1;
};



