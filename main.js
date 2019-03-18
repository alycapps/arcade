$( document ).ready(function() {
  var games = [
    {
      name: "Hangman",
      source: "./hangman/index.html",
    },
    {
      name: "Crystals Collector",
      source: "./crystals/index.html"
    },
    {
      name: "Trivia Game",
      source: "./trivia/index.html"
    },
    {
      name: "Psychic Game",
      source: "./psychic/index.html"
    }
  ];

  console.log(games);

  for(let i=0; i<games.length; i++) {
    var myCol= $("<div class='col-md-4'>");
    var gameCard=$("<a href=" + games[i].source + ">");
    var card = $("<div>");
    card.addClass("card");
    var body = $("<div>");
    body.addClass("card-body");
    body.text(games[i].name);
    card.append(body);
    gameCard.append(card);
    myCol.append(gameCard)
    $("#cardloc").append(myCol);
  }

});