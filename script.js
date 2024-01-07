const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

//get random quote using locallly save json file

// function showLocalQuote(){
//     const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(localQuote);
// }

// showLocalQuote();

//get random quaote using api

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//Get Quotes From Api
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //pass error here
    }
}

getQuotes();