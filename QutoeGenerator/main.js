const quoteContainer = document.getElementById("qutoecontainer");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQutoeBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader");
let apiQutoes = [];

function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete () {
    loader.hidden = true;
    quoteContainer.hidden = false ; 
}
//Show New Quote
function newQutoe(){
    loading();
    //Pick a random quote from apiQutose array
    const quote = apiQutoes[Math.floor(Math.random() * apiQutoes.length)]
    if(!quote.author){
    quoteText.textContent ="Unknown"
    } else {
     quoteAuthor.textContent = quote.author;
    }
    if (quote.text.length>120){
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}  
//Get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
    const response = await fetch(apiUrl);
    apiQutoes = await response.json();
    newQutoe();
    } catch (error){
    alert("This process is error")
    }
}

getQuotes();