// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a programming joke...');
  
  // Fetch a random programming joke from the Official Joke API
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(function(response) {
      // Convert the response to JSON
      return response.json();
    })
    .then(function(data) {
      // The API returns an array with one joke object
      const joke = data[0];
      // Display the joke setup and punchline on the page
      setup.textContent = `Setup: ${joke.setup}`;
      punchline.textContent = `Punchline: ${joke.punchline}`;
    });
});