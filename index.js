//Think of this as my js snippet file? Will be using this to practice JS. Don't like JS - but it's not going anywhere- so I gotta learn it... again.

//If Statments
// Example 1
/* if (1 === 1) {
	console.log('Correct!');
}

//Example 2
let rating1 = 3;

if (rating1 === 3) {
	console.log('Meh!');
}

// Example 3

let num = 37;

if (num % 2 !== 0) {
	console.log('odd number!');
}

// ElseIF

/* Performance Review! 
3- Rock Star! 
2- meh! 
1- 'you gotta pick it up, kid' 
*/
/*
let rating = Math.floor(Math.random() * 3) + 1;

if (rating === 3) {
	console.log('Rock Star!');
} else if (rating === 2) {
	console.log('meh!');
} else if (rating === 1) {
	console.log('you gotta pick it up, kid');
} else {
	console.log('do you even work here?');
}

//example 2
// High Score?

let highScore = 1500;
let currentUserScore = 1501;

if (currentUserScore >= highScore) {
	console.log(`Congratulations you have the High Score: ${currentUserScore}!`);
	highScore = currentUserScore;
} else {
	console.log(`Your current score is: ${currentUserScore}`);
}

// Nesting conditionals.

//example 1

let password = 'Joshua Lopez';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Valid Password');
	} else {
		console.log('Password cannot contain spaces!');
	}
} else {
	console.log('Password is too short!');
}

let jasonOwes = 120;
jasonOwes = jasonOwes - 46;

console.log(jasonOwes);

let number = Number(prompt('Pick a number!'));
if (!Number.isNaN(number)) {
	console.log('Your number is the square root of ' + number * number);
}

//array

let badSongTitles = [ 'YO', 'Sheesh', 'Savage', 'p0ggers' ];

badSongTitles.push('Fs in Chat');
*/

const xhr = new XMLHttpRequest();

const url = 'https://api.waifu.pics/sfw/highfive';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
	}
};

xhr.open('GET', url);
xhr.send();
