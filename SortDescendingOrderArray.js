//____________________Array Sorter____________________
//Descending order.

function DescOrder(Array)
{	var newArray = [];
	var iIsLesser = 1;
	var y;
	for (i = 0; i < Array.length; i++)
	{	y = Array[i];
		for (x = 0; x < Array.length; x++)
		{	if (x == i)
			{//do nothing
			}
			else if (Array[i] > Array[x]) //Here's where we compare Array[x] to Array[i]
			{	iIsLesser = 0;				
			}
		}
		if (iIsLesser = 1)
		{	newArray[newArray.length] = y;
		}
		else {/*do nothing*/}
	}
	for (i = 0; i < Array.length; i++)
	{	Array[i] = newArray[(newArray.length - 1) - i];
		document.write(Array[i])
	}
}