const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('It\'s Rock Paper Scissors, Dummy')
    }
};

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ('it is a tie!')
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer is the winner!';
        } else {
            return 'Human is the winner!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer is the winner!';
        } else {
            return 'Human is the winner!'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer is the winner!';
        } else {
            return 'Human is the winner!';
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice))
};

playGame();