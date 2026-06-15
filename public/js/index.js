"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "The world's still the same there's just less in it",
        author: "Captain Jack Sparrow",
    },

    {
        quote: "I want it over and done. I do. I'm tired boss. Tired of bein' on the road, lonely as a sparrow int the rain",
        author: "John Coffey",
    },

    {
        quote: "Get busy livin or get busy dyin",
        author: "Andy Dufresne",
    },

    {
        quote: "It's not all sunshine and rainbows, sooner or later you are going to get hit. The way you respond to it is going to determine your outcome.",
        author: "Shawn Lawson"
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);