const quote = document.querySelector('.text');
const author = document.querySelector('.author');
const url = 'https://api.quotable.io/random';

const getQuote = () => {
    fetch(url)
    .then(data => data.json())
    .then((data) => {
        quote.innerHTML = data.content ;
        author.innerHTML = data.author ;
    })
}

window.addEventListener('load' , getQuote);
document.querySelector('.btn').addEventListener('click' , getQuote)
