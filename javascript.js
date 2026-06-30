
let quotes = [];

fetch("quotes.json")
    .then(res => res.json())
    .then(data => {
        quotes = data;
    });

const button = document.getElementById("koalaButton");
const quote = document.getElementById("quote");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomFact = quotes[randomIndex]
    quote.textContent = randomFact;
});

