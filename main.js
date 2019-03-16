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
    var card=$("<a href=" + games[i].source + ">");
    card.append("<div class='card'> <div class='card-body'>" + games[i].name);
    $(".cardloc").append(card);
  }

});