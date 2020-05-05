/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// `quotes` array called before this script in index.html

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
 * @param {array} data - specifies which array the function will run on.
 * @returns a random object from the input array.
***/

function getRandomQuote(data) {
  let dataNumber = getRandomNumber(data.length);
  console.log('returning data in place ' + dataNumber);
  return data[dataNumber];
}

/***
 * `generaeColor` function
 * returns a randomized RGB color code for use with CSS.
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
 * 
***/

function printQuote() {
  console.log(getRandomNumber(quotes.length));
  let newQuote = getRandomQuote(quotes);
  let quoteText = document.querySelector('.quote');
  let quoteSource = '';
  let quoteSourceSelector = document.querySelector('.source');

  quoteText.innerHTML = newQuote.quote;

  quoteSource = `${newQuote.source}`;

    if (newQuote.citation != undefined) {
      console.log ('Citation found.');
      quoteSource += `<span class="citation">${newQuote.citation}</span>`;
    } else {
      console.log('No citation found.');
    }

    if (newQuote.year != undefined) {
      console.log ('Year found.');
      quoteSource += `<span class="year">${newQuote.year}</span>`;
    } else {
      console.log('No year found.');
    }

    if (newQuote.book != undefined) {
      console.log ('Book found.');
      quoteSource += `<br>From: <a href="${newQuote.link}">${newQuote.book}</a>`;
    } else {
      console.log('No book found.');
    }

    console.log(quoteSource);

  quoteSourceSelector.innerHTML = quoteSource;

  let bgColor = generateColor();
  console.log(`color is ${bgColor} `);
  document.body.style.backgroundColor = bgColor;
}

//setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/* Notes:
https://www.w3schools.com/howto/howto_js_add_class.asp
*/ 