//Even Fibonacci Sequence
//Fibonacci Series. Each consecutive sum is the sum of the two previous sums. 0,1,1,2,3,5,8.13
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var maxValue = 100;
var sum = 1; 
var total = 1;
console.log(sum);
for (i = 0; i < 10; i++) 
{	if (total == 1)
	{	//print total, without the ", "
		document.write(total);
		total = total + sum;
	}
	else if (total < maxValue)
	{	//print total
		document.write(", " + total);
		total = total + sum;
	}
		
	if (sum < maxValue)
	{	//print sum
		document.write(", " + sum);
		sum = total + sum; 
	}
	else 
	{	break;
	}
}
console.log("total = " + total + "; sum = " + sum);