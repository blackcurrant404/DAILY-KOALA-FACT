let quotes = [];
let todayQuote;

fetch("quotes.json")
    .then(res => res.json())
    .then(data => {
        quotes = data;

        const today = new Date();
        const start = new Date(today.getFullYear(), 0, 0);
        const diff = today - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        const quoteIndex = dayOfYear % quotes.length;

        todayQuote = quotes[quoteIndex];
    });

const button = document.getElementById("koalaButton");
const quote = document.getElementById("quote");

button.addEventListener("click", () => {
    quote.textContent = todayQuote;
});

