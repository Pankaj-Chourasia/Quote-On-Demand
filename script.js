const batmanQuotes = [
    { quote: "I am vengeance. I am the night. I am Batman!", author: "Batman Begins" },
    { quote: "Why do we fall? So we can learn to pick ourselves up.", author: "The Dark Knight" },
    { quote: "It's not who I am underneath, but what I do that defines me.", author: "Batman Begins" },
    { quote: "You either die a hero, or you live long enough to see yourself become the villain.", author: "The Dark Knight" },
    { quote: "There's a difference between justice and vengeance. I'm willing to pay the price for both.", author: "Batman v Superman: Dawn of Justice" },
    { quote: "I believe what doesn't kill you simply makes you... stranger.", quote: "The Dark Knight" },
    { quote: "Some days, you just can't get rid of a bomb.", author: "The Dark Knight" },
    { quote: "Criminals are like weeds, Alfred. Pull one up, another grows in its place.", author: "Batman: The Animated Series" },
    { quote: "Fear is a tool. When I'm in control, it's not going to control me.", author: "Batman Begins" },
    { quote: "You have to choose what matters most. And for me, it's always been Gotham.", author: "The Dark Knight Rises" },
    { quote: "Why so serious?", author: "Joker"},
    { quote: "Not clown—Joker", author: "joker"},
    { quote: "I used to think my life was a tragedy, but now I realize it's a comedy.", author: "Joker"},
    { quote: "", author: "Joker"},
    { quote: "As you know, madness is like gravity: All it takes is a little push", author: "Joker"},
    { quote: "If you’re good at something, never do it for free", author: "Joker"},

  ];

    const button = document.getElementById('button');
    const quoteContainer = document.getElementById('quote-container');
  
    // Function to pick a random quote from the array
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * batmanQuotes.length);
      return batmanQuotes[randomIndex];
    }
  
    // Function to display the quote and author
    function displayQuote(quoteData) {
      quoteContainer.innerHTML = `"${quoteData.quote}" - ${quoteData.author}`;
    }
  
    //event listener to the button
    button.addEventListener('click', () => {
      const quoteData = getRandomQuote();
      displayQuote(quoteData);
    });
  
    