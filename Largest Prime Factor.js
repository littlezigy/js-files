 /*-------------------------------THE PRIME FACTOR CHALLENGE--------------------------------------------
FIND THE LARGEST PRIME FACTOR OF: 600851475143

METHOD
INITIALIZATION: Three place holders. One for 'value'
STEP 1: Divide 'value' by the smallest prime number: 'primes' = 2
STEP 2: If primes (2) doesn't divide 'values' without leaving a remainder, move to the next prime number, in this case, 3
STEP 3: When a prime manages to divide value efficiently, that prime is billed as the highest prime factor of value, and the result of 'value' divided by prime is a placeholder: secondVal.
*/

var primes = 2;
var value = prompt("Please type in the number for which the highest prime factor will be calculated.");
var biggestPrime;
var secondValue = value;

for (p = 2; p <= secondValue; p++)
{	if (secondValue % p == 0)
	{	document.write("<p>" + secondValue + " / " + p + " is: " + (secondValue/p) + ": leaves No remainder" + "</p>");
		biggestPrime = p;
		secondValue = (secondValue / p);
		document.write("secondValue = " + secondValue + "; biggestPrime = " + biggestPrime + "; p = " + p + ". ***************<br />");
		p = 1;
	}

}