const quote = document.getElementById(`quote`)
const author = document.getElementById(`author`)
const quoteBtn = document.getElementById(`new-quote-btn`)
const twitterBtn = document.getElementById(`twitter-btn`)

let currQuote = ""
let currAuthor = ""

async function getQuote() {
  const response = await fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      currQuote = data.quote;
      currAuthor = data.author;
    });
}

/* ON PAGE LOAD RUN */
document.addEventListener("DOMContentLoaded", () => {
  getQuote();
  quote.textContent = currQuote;
  author.textContent = currAuthor;
});

quoteBtn.addEventListener("click", () => {
  getQuote();
  quote.textContent = currQuote;
  author.textContent = currAuthor;
});