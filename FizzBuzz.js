//Fizzbuzz. The working code
var number = function() {
for (i=1; i<=20; i++) {
	if (i% 15 === 0) {
		console.log("FizzBuzz " + i);}
	else if (i%5 === 0) {
		console.log("Buzz" + i);
		}
	else if (i%3 === 0) {
		console.log("Fizz" + i);
		}
	else {
		console.log(i)
		}
	}
}
 
number();