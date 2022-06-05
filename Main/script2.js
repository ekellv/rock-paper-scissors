var win = 0;
var lose = 0;
var tie = 0;

var options = ["R", "P", "S"];

var rockPaperScissors = function() {
    var yourChoice = window.prompt("Enter R, P or S!"); 

if (!yourChoice)  { 
    return;
} 

yourChoice = yourChoice.toUpperCase();

var index = Math.floor(Math.random()* options.length);
var computerChoice = options[index];

window.alert("The computer chose " + computerChoice+ " !")

if (yourChoice === computerChoice) {
    window.alert("You tied! 🙃")
    tie++
} else if (
    (yourChoice == "R" && computerChoice == "S") ||
    (yourChoice == "S" && computerChoice == "P") ||
    (yourChoice == "P" && computerChoice == "R")
    ) { 
    window.alert("You win! 🙂");
    win++;
} else {
    window.alert("You lose! 😕");
    lose++
}

window.alert(
    "Stats:\nWins: " + win+ "\nLosses: " + lose + "\nTies: " + tie
  );

var playAgain = window.confirm("Play again?");

  if (playAgain) {
    rockPaperScissors();
  }
};

rockPaperScissors();


