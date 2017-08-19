var total = 1;
var a;
function exp(power,number)
	{
		a = 1;
		while (a<=power)
		{
			total = total * number;
			a++;
		}
		document.write("<p>"number + " raised to the power of " + power + " is " + total + ". <br>");
		total = 1;
		a = 1;
	}		
function e()
{
	name = prompt("Hi there! What's your name?");
	alert("Good day " + name + "! This is an exponent calculator. First of all, I need you to type in the number you are trying to square, or cube...");
	number = prompt("x raised to the power of y. I need you to type in x. Thank you " + name + ".");
	alert("Now I need you to type in the power, or exponent, that you want to raise _" + number + "_ to. Please type in an integer.");
	power = prompt(number + " raised to the power of:");
	exp(power, number);
}
e();