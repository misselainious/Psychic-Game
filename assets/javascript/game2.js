// Creating variables to hold the number of wins, losses, and guesses.
var guessesRemaining = 9;
var wins = 0;
var losses = 0;
var pastGuesses = [];


var computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winnerText = document.getElementById("winner-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var pastGuessesText = document.getElementById("pastGuesses-text");


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//START OF GAME

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

   // Determines which key was pressed.
   var userGuess = event.key;

   if (!pastGuesses.includes(userGuess))  {
    // pastGuesses.push(userGuess);
    pastGuessesText.textContent = pastGuesses;
    guessesRemaining = (guessesRemaining - 1);
}
   
   console.log(pastGuesses);
   computerChoiceText.textContent = "";
  
//    var inGuessArray = pastGuesses.includes(userGuess);
//    console.log(inGuessArray);

   if (userGuess === computerGuess) {
     wins++;
     guessesRemaining = 9;
     pastGuesses = "";
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
     alert("OMG you're like so psychic! Let's see if you can do it again.");
    } 


    if(!pastGuesses.includes(userGuess)){
        pastGuesses = pastGuesses + event.key + ", ";
        }
     
   if (userGuess !== computerGuess){
     guessesRemaining--;
     } 
     if (pastGuesses.includes(userGuess)){
         guessesRemaining++;
     }
   
    if (guessesRemaining < 1) {
     losses++;
     computerChoiceText.textContent = "The computer chose: " + computerGuess + ", better luck next time!";
     guessesRemaining = 9;
     pastGuesses = "";
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   }
   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Display the user and computer guesses, and wins/losses/ties.


userChoiceText.textContent = "You chose: " + userGuess;
pastGuessesText.textContent = "Your previous guesses: " + pastGuesses;
guessesRemainingText.textContent = "Your guesses remaining: " + guessesRemaining;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;

};