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

quoteBtn.addEventListener("click", () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.documentElement.style.setProperty('--accent-color', randomColor); /* document.documentElement */
  getQuote();
});

twitterIcon.addEventListener("click", () => {
  twitterIcon.href = `https://twitter.com/intent/tweet?text="${currQuote}"-${currAuthor}`
});

/* ON PAGE LOAD RUN */
window.onload = function () {
  getQuote();
};