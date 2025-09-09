function updateDisplay() {
  let textbox = document.getElementById("textinput");
  let displaytext = document.getElementById("nameDisplay");

  displaytext.textContent = textbox.value;
}

let quotes = [
  "Everything happens for a reason",
  "Trust God with all of your Hearts",
  "Small progress each day adds up to big results",
  "Your only limit is your mind",
  "Don't stop when you're tired, stop when you're done",
];

let displayQuote = document.getElementById("quoteDisplay");

function displayRandom() {
  
    let randomIndex = Math.floor(Math.random() * quotes.length);

    displayQuote.textContent = quotes[randomIndex];
  
}




