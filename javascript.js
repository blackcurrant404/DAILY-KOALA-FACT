let quotes = [];
let todayQuote; 

const startDate = new Date("2026-06-30");

fetch("quotes.json")
    .then(res => res.json())
    .then(data => {
        quotes = data;

        const today = new Date();
        const diff = today - startDate;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayIndex = Math.floor(diff / oneDay);

        const quoteIndex = dayIndex % quotes.length;

        todayQuote = quotes[quoteIndex];
    });

const button = document.getElementById("koalaButton");
const quote = document.getElementById("quote");

button.addEventListener("click", () => {
    quote.textContent = todayQuote;
});

