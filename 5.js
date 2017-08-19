var prime;
var value = prompt("Please type in a number.");

for (i = value; i > 1; i--) {
	if (value %i == 0) {
		console.log(i + " is a factor of " + value);
		
		/*
			for (x = 2; x < i; x++) {
			if (i % x == 0) {
			console.log(i + " is not a prime factor");
			*/
			}
		}
	}