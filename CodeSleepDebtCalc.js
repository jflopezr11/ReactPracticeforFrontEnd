const getSleepHours = (day) => {
	switch (day) {
		case 'Monday':
			return 8;
			break;
		case 'Tuesday':
			return 8;
			break;
		case 'Wednesday':
			return 7;
			break;
		case 'Thursday':
			return 7;
			break;
		case 'Friday':
			return 8;
			break;
		case 'Saturday':
			return 8;
			break;
		case 'Sunday':
			return 8;
			break;
		default:
			console.log('invalid day');
	}
};

const getActualSleepHours = () =>
	getSleepHours('Monday') +
	getSleepHours('Tuesday') +
	getSleepHours('Wednesday') +
	getSleepHours('Thursday') +
	getSleepHours('Friday') +
	getSleepHours('Saturday') +
	getSleepHours('Sunday');

const getIdealSleepHours = () => {
	let idealHours = 8;
	return idealHours * 7;
};

const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();

	if (actualSleepHours === idealSleepHours) {
		console.log('User got the perfect amount of sleep!');
	} else if (actualSleepHours > idealSleepHours) {
		console.log('User got too much sleep!');
	} else {
		console.log(`You should sleep more!`);
	}
};

calculateSleepDebt();

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
