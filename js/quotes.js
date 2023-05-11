const quotes = [
    "The best way to predict the future is to create it.",
    "Lord Chamberlain's readers or controllers, which were a handful of people working directly to him, were a very assorted group of people and some of them tried very hard to be as liberal as they could.",
    "It does not matter how slowly you go as long as you do not stop.",
    "I love you, hugs & kisses, smoochies galore, licks, nibbles & assorted gropages!! -Aisling said to Drake",
    "Otis was inspired by a boy who sat across the aisle from me in sixth grade.",
    "I won’t get upset at you about a mistake. I’ll get upset at you for the next mistake that comes from still thinking about the last mistake.",
    "Part of being a champ is acting like a champ. You have to learn how to win and not run away when you lose.",
    "Champions keep playing until they get it right. Then they play more.",
    "Strive not to be a success, but rather to be of value.",
    "The way to get started is to quit talking and begin doing."
  ];

  const quoteEl = document.getElementById("quote");
  const btnEl = document.getElementById("btn");

  btnEl.addEventListener("click", generateQuote);

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.innerHTML = quotes[randomIndex];
  }