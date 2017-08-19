//Project: Type in a number -- a real number please.

var numbers = [0,1,2,3,4,5,6,7,8,9];
var num = prompt("Type in a number."); console.log(num);

for (i=0; i<numbers.length; i++) {console.log(i);
	if (num.substring(0,1) != numbers[i]) {
		console.log(num + " is not a number");
		alert (num + " is not a number.");
		var num = prompt("Please type in a number.")}
	else if (num.substring(0,1)==numbers[i]) {
		alert ("Thank you. Click OK to continue.")
		console.log(num)}