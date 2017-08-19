//Declare variables userChoice and computerChoice. Here they are global variables because they were defined
//before being input into the functions 'user()' and 'computer()'.

var userChoice;
var computerChoice;

//Define a function that changes the variable 'userChoice' to the answer a user types into a prompt box.
var user = function() {
userChoice = prompt("Do you choose rock, paper or scissors?");
console.log(userChoice);
alert("You choose " + userChoice);
}

//Define variable computerChoice. This takes a random number from 0 to 1 and assign it a value.
//That value could be rock, paper or scissors.

var computer = function () {
computerNumber = Math.random();
console.log(computerNumber);
if (computerNumber <0.34){
	computerChoice = "rock";
}else if(computerNumber <=0.67){
	computerChoice = "paper";
}else{
	computerChoice = "scissors";}
console.log(computerChoice);
alert("The computer chooses " + computerChoice);
}

var compare = function(choice1, choice2) {
	if (choice1.substring(0,3) === choice2.substring(0,3)) {
		alert ("The result is a tie!");
	var playAgain = confirm("Do you want to play again?")
			if (playAgain === true) {
			user(); computer();
			compare (userChoice, computerChoice);
			}
			else {return};
	}
	if (choice1.substring(0,3) === "roc") {
		if (choice2 === "scissors") {
			alert(choice1 + " wins");}
			
		else {alert(choice2 + " wins");}
		var playAgain = confirm("Do you want to play again?")
		console.log(playAgain);
			if (playAgain === true) {
			user(); computer();
			compare (userChoice, computerChoice);
			}
			else {return};
	}
	if (choice1.substring(0,3) ==="pap") {
		if (choice2 === "rock") {
			alert(choice1 + " wins");
			var playAgain = confirm("Do you want to play again?")
			if (playAgain === true) {
			user(); computer();
			compare (userChoice, computerChoice);
			}
			else {return};
		}
		else {alert(choice2 + " wins");}
	var playAgain = confirm("Do you want to play again?")
			if (playAgain === true) {
			user(); computer();
			compare (userChoice, computerChoice);
			}
			else {return};
	}
	if (choice1.substring(0,3) === "sci") {
		if (choice2 === "paper") {
			alert(choice1 + " wins");
			var playAgain = confirm("Do you want to play again?")
			if (playAgain === true) {
			user(); computer();
			compare (userChoice, computerChoice);
			}
			else {return};
		}
		else {
			alert(choice2 + " wins");
			var playAgain = confirm("Do you want to play again?")
			if (playAgain === true) {
			user(); computer();
			compare (userChoice, computerChoice);
			}
			else {return};
		}
	}
	return;
};

user(); computer()

compare(userChoice, computerChoice);