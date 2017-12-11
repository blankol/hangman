//console.log('Hello World')

// Game objective: Player enter letters to guess the word. The word is hidden and represented by 
// blank spaces that will need to be filled in to win. Everytime the player guesses wrong.


// Pseudocode:
// Nine lives (A Hangman inspired game): 
// Random word of ten-twelve letters long are selected by. 

// Show player hidden word they have to guess. Show progress.
// Get them to guess.

// Tell player to pick a single letter.

// If guess is in the word. Update with progress.
//      Else alert they only have 8 more guesses!
// If word is guessed right. 
//      Congratulate player!
// Else mark down each letter.
// If all nine tries are used. 
//      Tell player they lost.
// Loop back to restart the game.

var words = [            // Array of secret words. More will be added.
    'strawberry',
    'blackjacks',
    'lumberjack',
    'television',
    'Retirement',	
    'jackhammer',
    'mozzarella',
    'equalizing',
    'jeopardize',
    'quizmaster',
    'quicksteps',
    'beachcombs',
    'schematize',
    'bankruptcy',
    'inadequacy',
    'civilizers',
]

var randomWord = function() {    // Function that generates words randomly.
    return words[Math.floor(Math.random() * words.length)] 
    }

var wordsArray = []             // Loop for array content 'words' to match the ammount of letters. 
                                // When loop is done it will recognise length of words.
for (var content = 0; content < words.length; content++) {
        wordsArray[content] = "_"
}

// var remainingLetters = words.length 
