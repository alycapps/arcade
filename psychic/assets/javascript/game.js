var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = document.getElementById("wins");
var wins = 0;
var losses = document.getElementById("losses");
var losses = 0;
var guesses = document.getElementById("guesses");
var guesses = "";
var left = document.getElementById("left");
var left = 8;

var letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
console.log("computer choice: " + letter);

document.onkeyup = function(event) {
    guess = event.key;
    console.log("player guess: " + guess);

    if (~alphabet.indexOf(guess)) {

        if (guess===letter) {
            console.log("you win");
            alert("You win the letter was: " + letter + "!");
            wins++;
            console.log("wins: " + wins);
            left = 8;
            guesses = "";
            letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
            console.log("computer choice: " + letter);
        }

        else if (left > 0) {
            (left -= 1);;
            console.log("guesses: " + guesses);
            guesses += guess + ", ";
        }

        else {
            console.log("you lose");
            alert("Try again, the letter was: " + letter + ".");
            losses++;
            console.log("losses: " + losses);
            left = 8;
            guesses = "";
            letter = alphabet[Math.floor(Math.random() * (alphabet.length))];
            console.log("computer choice: " + letter);
        }
    }

    else {
        alert("Please choose a letter.");
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("left").innerHTML = left;
}