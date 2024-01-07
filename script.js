const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//Show Loading

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;   
}

//get random quote using locallly save json file

// function showLocalQuote(){
//     const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(localQuote);
// }

// showLocalQuote();

//get random quaote using api

function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //check that author is not null

    if(!quote.author){
        quoteAuthor.textContent = 'Author';
    }else{
        quoteAuthor.textContent = quote.author;
    }
    
    //check if quote is lengthy than change style

    if(quote.text.length > 50){
        quoteText.classList.add('long-text');
    }else{
        quoteText.classList.remove('long-text');
    }

    //show quote and hide loader
    quoteText.textContent = quote.text;
    complete();
}

//Get Quotes From Api
async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //pass error here
    }
}

//Tweet Quote

function tweetQuote(){
    const twitterUrl = `http://twitter.com/intent/tweet?$text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}
//Event Listeners
newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener("click",tweetQuote);

//On load
getQuotes();