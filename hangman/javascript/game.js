var word = ["miss saigon", "les mis", "cabaret", "a bronx tale", "anastasia", "the addams family", "dear evan hansen", "hamilton", "annie", "the king and i", "chicago", "beauty and the beast", "the book of mormon", "little shop of horrors", "the phantom of the opera", "cats", "once on this island", "sweeney todd", "hedwig and the angry inch", "matilda the musical", "newsies", "pippin", "the pirates of penzance", "avenue q", "school of rock", "something rotten"];
var guesses = document.getElementById("guessedletters");
guesses = [];
var guessesrem = document.getElementById("guessesrem");
var startingguess = 6;
guessesrem.innerText = startingguess;
var wordlocation = document.getElementById("wordlocation");
var wins = document.getElementById("wins");
var winsnumber = 0;
wins.innerText = winsnumber;
var losses = document.getElementById("losses");
var lossesnumber = 0;
losses.innerText = lossesnumber;

//random word chosen
var compword = word[Math.floor(Math.random() * (word.length))];

//underscores of word shown
function underscores(a) {
    var characters = "";
    for (var i=0; i<a.length; i++) {
        //add if statement for spaces
        if (a[i] === " "){
            characters += " ";
        }
        //add else statement for spaces
        else {
            characters += "-";
        }
    }
    return characters;
}

//display underscores on page
var displayedword = underscores(compword);
wordlocation.innerHTML = displayedword;

//player guesses letter
document.onkeyup = function(event) {
    var guess = event.key;
     
    //check if letter was chosen and not number or something
        if (event.keyCode >=65 && event.keyCode <=90) {
            var currentword = wordlocation.innerText;

            // check if letter has already been chosen
            if (guesses.indexOf(guess) === -1) {
                guesses.push(event.key);

                //if correct fill in the blank
                if (compword.includes(guess)) {
                    // fill in blanks with guessed letters
                    var rewriteword = ""; 
                    for (var w=0; w < compword.length; w++) {
                        if (guess == compword[w]) {
                            rewriteword += guess;
                        }
                        else {
                            rewriteword += currentword[w];
                        }
                    }
                    wordlocation.innerText = rewriteword;

                    //win game if word is complete
                        if (rewriteword == compword) {
                            alert("And the Tony goes to " + compword + "!")
                            winsnumber++;
                            startingguess = 6;
                            guesses = [];
                            //choose and display new word
                            compword = word[Math.floor(Math.random() * (word.length))];
                            underscores(compword);
                            displayedword = underscores(compword);
                            wordlocation.innerHTML = displayedword;
                        }

                }

                //if guess is wrong
                else if (startingguess > 0) {
                    startingguess--;
                }

                //if out of guesses lose game
                else {
                    alert("Try again, the word was " + compword)
                    lossesnumber++;
                    startingguess = 6;
                    guesses = [];
                    //choose and display new word
                    compword = word[Math.floor(Math.random() * (word.length))];
                    underscores(compword);
                    displayedword = underscores(compword);
                    wordlocation.innerHTML = displayedword;
                }
            }


            // else if duplicate letter
            else {
                alert("Please chose a new letter");
                //remove duplicate letter from guesses array
            }
    }
    //choose a letter alert
    else {
        alert("Please choose a letter.");
    }

    //connect to html
    document.getElementById("guessedletters").innerHTML = guesses;
    document.getElementById("guessesrem").innerHTML = startingguess;
    document.getElementById("losses").innerHTML = lossesnumber;
    document.getElementById("wins").innerHTML = winsnumber;
}

