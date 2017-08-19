var factors = []
var value = prompt("Please type in a number.");
var pbold = "<p><b>";
var pBold = "</b></p>";
function factor (value) 
{	for (i = 2; i<value; i++)
	{	if (value % i == 0)
		{	factors[factors.length]=i;
			var other = value / i;
			document.write(pbold + "[" + i + ", " + other + "]" + pBold);
		}
		else {/*do nothing*/}
	}
	document.write("The factors of " + value + " are " + factors + ".");
}

factor(value);