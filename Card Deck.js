/* For numbers 1-13, 13-26, 27-26 and 52, a new suit of cards should begin */

var suit = ['hearts', 'spade', 'club', 'diamond'];
var round = 0;
var i = 1;
var j = i;
while (i <= 52)
{	if ((suit[round] == null) || (suit[round] == undefined))
	{break;}
	
	else if (i>13)
	{	i = 1;
		round++
		document.write("<br />" + "<p>");
	}
	else if (i>10)
	{
		if (i == 11)
		{	j = "Jack";
			console.log(j)
		}
		if (i == 12)
		{	j = "Queen";
			console.log(j);
		}
		if(i == 13)
		{	j = "King";
			console.log(j);
		}
		document.write ("<p><b>" + j + " of " + suit[round] + "</b></p>");
	}
	
	else
	{	document.write ("<p><b>" + i + " of " + suit[round] + "</b></p>");
	}
	i++;
}