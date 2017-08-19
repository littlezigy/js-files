var name = prompt("Hello there. What is your name?")

var greeting = function () {
confirm("Greetings " + name +". Would you like to go for a walk?")
}
greeting();

var choice1 = prompt("So are you going to  a. Pack an sandwich or   b. Just start going ?...psst. Just type in a or b")

if (choice1=="a") {
alert("So you pack two chicken sandwiches and five cheese sandwiches -- you are a hungry one --, some juice, water and no chocolate. :(" )
}

else if (choice1=="b") {
alert("So you set out on your journey with no munchies. Hopefully you had a huge breakfast ;)");
}

else {
choice1 = prompt("Please type in your choice again. Do you a. Pack a sandwich or b. Just start going. Remember to either type in a or b.")
if (choice1=="a") {
alert("So you pack two chicken sandwiches and five cheese sandwiches -- you are a hungry one --, some juice, water and no chocolate. :(" );
}

else if (choice1=="b") {
alert("So you set out on your journey with no munchies. Hopefully you had a huge breakfast ;)");
}

else {
prompt("Please type in your choice again. Do you a. Pack a sandwich or b. Just start going. Remember to either type in a or b.")
};
};
var choice2 = prompt("Which path do you take? The left path or the right path? | Just type in left or right :)")
if (choice2 =="left") {
alert("Your path leads to a river. You should probably follow the river coastline because rivers always lead to civilization...ancient wisdom.");
var ancientwisdom = confirm("Do you follow ancient wisdom? Choose 'OK' if you do and 'Cancel' if you don't :D .");
if (ancientwisdom == true) {
alert("As ancient wisdom correctly predicts you do happen upon a group of villagers by the river. Unfortunately, they are...")
ancientwisdom2 = prompt("What do you think they are?")
if (ancientwisdom2 == "cannibals") {
alert ("You bet they are!")}
else if (ancientwisdom2 == "canibals") {alert("Yep! And they want to eat you!")}
else {("They are cannibals! And you look delicious. Your picnic basket also contained ketchup that spread all over you when you were wading in the water so now you look like a hotdot. Who doesn't like hotdogs?")}
alert("Run! Run! As fast as you can! If you're fast enough they can't catch you.")
alert("You finally get away from the flesh-eating canivores -- haha. Flesh-eating and canivores mean the same thing :). Phew! But your dress is stained :( And your adventure comes to an end here. :'(")
var rate = prompt("Please rate this game on a scale of one to ten. :D")
if (rate > 6) {
alert("You are a wonderful person, rater. This is the beginning of my game empire. When they're more games I'll be sure to tell you. Thanks for playing :D")
}
else if (rate < 6) {
alert("I've slaved away at this game and that's all you can give me? >:| ...Just kidding! Thanks for playing :D *The writer of this game is not in any way bipolar*")}
}
else if (ancientwisdom == false) {
alert ("So you follow a very faint path you've just discovered. People must have travelled here sometime. I wonder where this leads to. Hmm... Come on, say that with me, hmmm... now tap your chin - hmmm, now scratch your butt - hmmm :)).... did you scratch your butt...Shrek? Hahahaha! OMG. I'm just kidding.");
alert("So...Sandy. It's a long, long way to wherever you're going...do you still have that picnic basket?");
name2 = confirm("What? Your name isn't Sandy? Click ok if it is not 'Sandy' and cancel if it is. :D.");
if (name2 == true) {
alert("Then your name is probably... (*o*) How could I forget a lovely name like " + name + "!")}
else{
alert("Then what is it? No, wait. Don't tell me... I have magical powers. I think it is...(._.) ..." + name + "!")};
confirm("Do you believe I have magical powers?");
alert("Oooh! Oooh! A nice spot over there...in the woods. 8 |");
var monster = confirm("Now you've made your way over to that nice little spot. Do you believe in the Loch-ness monster?")
if (monster == true) {
alert("Me too! I mean, when we were near that river I thought he was going to eat me. And you know what next? He'll probably keep our teeth so he can keep it under his pillow to give to the tooth fairy. Brrr!");
}
else {alert("Pshaw! Me neither! I mean, what next? The tooth fairy. *cues in nervous laughter*")};
alert("You had a very nice picnic in THE MOST BEAUTIFUL SPOT in the woods. You also sang to some birds and sneakily filled your basket and pocket with their eggs. I'm so proud :')")
alert ("The End");
var rate = prompt("Please rate my game :D");
if (rate <6) {
alert("That's it? :'(  Do you have any idea how hard I worked? Oh well. Thanks for playing! And just so you know, this is just the beginning of my game empire. I'll inform you when I have a new one out, but you better give it a better rating, or else! Sweet dreams. :))")
}
else {alert ("You've been most accomodating. Here a cookie *hands cookie*. Thanks for playing.")}
}
}
if (choice2 == "right") {
alert("You head for the right path that leads to the woods. You notice that the trees are all about ten stories tall, and suddenly you feel bird poop drop in your shoulders.")
var bird = prompt("How do you feel? a. Good! Let's kill that bird!   b. Wipe off bird poop.   c. Scream while wiping off the bird poop.       Choose a, b, c or d.")
if (bird == "a") {
alert("The bird moves to a lower branch giving you an advantage. You grab a stone, aim it at the bird and throw it. You have a good aim so you don't miss. The bird drops to the floor...dead. You pick it up...");
alert("...and wander deeper into the forest.");
}
}