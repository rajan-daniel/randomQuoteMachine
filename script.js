const quote = document.getElementById(`quote`)
const author = document.getElementById(`author`)
const quoteBtn = document.getElementById(`new-quote-btn`)
const twitterIcon = document.getElementById(`twitter-icon`)

let currQuote = ""
let currAuthor = ""

async function getQuote() {
  await fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      currQuote = data.quote;
      currAuthor = data.author;
      quote.textContent = `"${currQuote}"`;
      author.textContent = `-${currAuthor}`;
    });
}

/* ON PAGE LOAD RUN */
quoteBtn.addEventListener("click", getQuote);

window.onload = function () {
  getQuote();
};