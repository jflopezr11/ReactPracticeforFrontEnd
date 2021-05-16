let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = true;

let age = Math.floor(Math.random() * 90);
console.log(age);

if (age >= 18 && isRegisteredEarly) {
    raceNumber += 1000;
}

if (age >= 18 && isRegisteredEarly === true) {
    console.log(`Your race starts @ 9:30AM, Number ${raceNumber}`);
} else if (age >= 18 && isRegisteredEarly === false) {
    console.log(`Your race will start @ 11AM, Number ${raceNumber}`);
} else if (age < 18) {
    console.log(`Since you're younger than 18 you can join the kids race @ 12:30. Here is your number: ${raceNumber}`);
} else {
    console.log('Sorry, you are under 18 But there is a kids race at 12:30PM!');
}
