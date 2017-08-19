//Even Fibonacci Sequence
//Fibonacci Series. Each consecutive number is the sum of the two previous numbers. 0,1,1,2,3,5,8.13
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var total = 0;
var number = 1; 
var pNumber = 0;
console.log(number);
for (i = 0; i < 100; i++) {
		pNumber = pNumber + number; 
		number = pNumber + number; 
		if (pNumber<=4000000 && pNumber%2==0) {
			console.log(total + " + " + pNumber);
			total = total  + pNumber;
			}
		if (number<=4000000 && number%2==0) {
			console.log(total + " + " + number)
			total = total + number;
			}
	else {
		console.log(" ");
		}
	}