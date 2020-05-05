/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* The `quotes.js` array, containing the quote objects,
 is called before this script in index.html */

/**
 * `getRandomNumber` function
 * Generates a random number between 0 and max parameter.
 * @param {number} max - sets the maximum number that can be generated.
 */

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/***
 * `getRandomQuote` function
 * Selects a random object from an array and returns that objects position in the array.
 * @param array - specifies which array the function will run on.
 * @returns a random object from the input array.
***/

function getRandomQuote(data) {
  let dataNumber = getRandomNumber(data.length);
  console.log('returning data in place ' + dataNumber);
  return data[dataNumber];
}

/***
 * `generateColor` function
 * @returns a randomized RGB color code for use with CSS.
***/

function generateColor() {
  function generateCode () {
    let randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
  } 
  let rgbColor = 'rgb(' + generateCode() + ', ' + generateCode() + ', ' + generateCode() + ')';
  return rgbColor;
}

/***
 * `printQuote` function
 * Changes the Quote based on a randomly-selected object in from the data.js array (hosted separately).
***/

function printQuote() {
  console.log(getRandomNumber(quotes.length));
  let newQuote = getRandomQuote(quotes); // get a random quote from the data.js array (hosted separately)
  let quoteText = document.querySelector('.quote'); //selects the quote text element in the HTML
  let quoteSourceSelector = document.querySelector('.source'); //selects the quote source element in the HTML
  
  let quoteSource = ''; // defines empty quoteSource string so that we can build HTML inside for later output
    quoteSource = `${newQuote.source}`;

      if (newQuote.citation != undefined) { // checks for a citation in the selected quote object and adds it to the quoteSource string if present
        console.log ('Citation found.');
        quoteSource += `<span class="citation">${newQuote.citation}</span>`;
      } else {
        console.log('No citation found.');
      }

      if (newQuote.year != undefined) { // checks for a year in the selected quote object and adds it to the quoteSource string if present
        console.log ('Year found.');
        quoteSource += `<span class="year">${newQuote.year}</span>`;
      } else {
        console.log('No year found.');
      }

      if (newQuote.book != undefined) { // checks for a book in the selected quote object and adds it to the quoteSource string if present
        console.log ('Book found.');
        quoteSource += `<br>From: <a href="${newQuote.link}">${newQuote.book}</a>`;
      } else {
        console.log('No book found.');
      }

      console.log(quoteSource); // logs quoteSource string

  quoteText.innerHTML = newQuote.quote; // changes the quote displayed on the page
  quoteSourceSelector.innerHTML = quoteSource; // changes the quote source info displayed on the page

  let bgColor = generateColor();
  console.log(`color is ${bgColor} `);
  document.body.style.backgroundColor = bgColor; // changes the background color of the page each time the function is fired
}

/***
 * change the quote automatically every 5 seconds
***/

setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);