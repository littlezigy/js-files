//Find the sum of all the multiples of 3 or 5 below 1000.
var three;
var five;
var sum= 0;

for (i = 1 ; i<1000; i++) {
	if (i % 3 == 0) {
		document.write("<h2>" + i + " is a multiple of three. </h2>");
		sum = sum + i;
		}
	else if (i % 5 === 0) {
		document.write("<h2>" + i + " is a multiple of five. </h2>");
		sum = sum + i
		}
	else {}
	}
	
document.write("<h3> The total sum of the multiples of three and five is " + sum + "</h3>");