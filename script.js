const quote = document.getElementById(`text`)
const author = document.getElementById(`author`)
const quoteBtn = document.getElementById(`new-quote`)
const twitterIcon = document.getElementById(`tweet-quote`)

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

      twitterIcon.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currQuote}" - ${currAuthor}`)}`;
    });
}

quoteBtn.addEventListener("click", () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.documentElement.style.setProperty('--accent-color', randomColor); /* document.documentElement */
  getQuote();
});

/* ON PAGE LOAD RUN */
window.onload = function () {
  getQuote();
};