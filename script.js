document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const quoteContainer = document.getElementById('quote-container');
  const categorySelector = document.getElementById('category');
  const dynamicTextElement = document.getElementById('dynamicText');
  const dynamicWords = ['Inspiration', 'Motivation', 'Wisdom', 'Love']; 
  let currentWordIndex = 0;

  const themedQuotes = {
    all: [
      { quote: "Default quote for all categories", author: "Unknown" },
      // Add more default quotes for 'all' category if needed
    ],
    motivation: [
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      // Add more motivation quotes
    ],
    humor: [
      { quote: "I'm writing a book. I've got the page numbers done.", author: "Steven Wright" },
      { quote: "Why do they call it rush hour? Nothing moves.", author: "Robin Williams" },
      // Add more humor quotes
    ],
    love: [
      { quote: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
      { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
      // Add more love quotes
    ],
    // Add more categories as needed
  };

  function getRandomQuote(category) {
    const selectedCategory = themedQuotes[category] || themedQuotes.all;
    const randomIndex = Math.floor(Math.random() * selectedCategory.length);
    return selectedCategory[randomIndex];
  }

  function displayQuote(quoteData) {
    quoteContainer.innerHTML = `"${quoteData.quote}" - ${quoteData.author}`;
  }

  button.addEventListener('click', () => {
    const selectedCategory = categorySelector.value;
    const quoteData = getRandomQuote(selectedCategory);
    quoteContainer.classList.remove('show');
    setTimeout(() => {
      displayQuote(quoteData);
      quoteContainer.classList.add('show');
    }, 500);
  });

  // Additional function to update background image based on category
  function updateBackground(category) {
    const body = document.body;
    switch (category) {
      case 'motivation':
        body.style.backgroundImage = 'url("https://www.shutterstock.com/shutterstock/photos/2038108961/display_1500/stock-vector-think-outside-the-box-modern-and-stylish-motivational-quotes-typography-slogan-abstract-2038108961.jpg")';
        break;
      case 'humor':
        body.style.backgroundImage = 'url("https://imgs.search.brave.com/sHz9jK11YnxE89IYOF_nsT1hvWRHvzxnrBQnCD3PahA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZnVubnktOW5n/aTUxZGQ0OXE0cTI0/aS5qcGc")';
        break;
      case 'love':
        body.style.backgroundImage = 'url("https://imgs.search.brave.com/OfUBsVRUb02fhkt35njLW1T1V49w1K8Rm4vkbKj4rlw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbG92ZS1hcnQt/YmFja2dyb3VuZC02/bDdqdTRxNThjYWZo/djE2LmpwZw")';
        break;
      // Add more cases for additional categories
      default:
        body.style.backgroundImage = 'url("https://imgs.search.brave.com/a1-s172UlTQFBdvsVY-f4wtYeGN7jLZmboG1tnKg7Qc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFEYXBN/dGdoWVEvMS8wLzgw/MHcvY2FudmEtZ3Jl/ZW4tYW5kLXBpbmst/cm9zZXMtcXVvdGUt/ZGVza3RvcC13YWxs/cGFwZXItS2VMcTFQ/Z2hyM2suanBn")';
    }
  }

  // Trigger background update when the page loads
  updateBackground(categorySelector.value);

  // Update background when the category changes
  categorySelector.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    updateBackground(selectedCategory);
  });
  function animateText() {
    const currentWord = dynamicWords[currentWordIndex];
    const wordLength = currentWord.length;
    let charIndex = 0;
  
    function showNextCharacter() {
      if (charIndex < wordLength) {
        dynamicTextElement.textContent = currentWord.substring(0, charIndex + 1) + '|'; // Add cursor
        charIndex++;
        setTimeout(showNextCharacter, 100); // Adjust the duration as needed
      } else {
        setTimeout(() => {
          dynamicTextElement.textContent = currentWord + '|'; // Add cursor after the word
          setTimeout(startNextWord, 1000); // Adjust the duration as needed
        }, 500); // Wait for a moment before adding the cursor
      }
    }
  
    showNextCharacter();
  }
  
  function startNextWord() {
    dynamicTextElement.textContent = ''; // Clear the text before starting the animation
    currentWordIndex = (currentWordIndex + 1) % dynamicWords.length;
    animateText();
  }
  
  // Initial call to start the animation
  animateText();
});
