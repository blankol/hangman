//console.log('Hello World')

// Game objective: Player enter letters to guess the word. The word is hidden and represented by 
// blank spaces that will need to be filled in to win. Everytime the player guesses wrong.


// Pseudocode:
// Nine lives (A Hangman inspired game): 
// Random word of ten-twelve letters long are selected by. (Loop)

// Show player hidden word they have to guess. 
// Show progress as they guess.

// Tell player to pick a single letter.

// If guess is in the word. Update with progress.
//      Else alert they only have 8 more guesses!
// If word is guessed right. 
//      Congratulate player!
// Else mark down each letter.
// If all nine tries are used. 
//      Tell player they lost.
// Loop back to restart the game.

var words = [            
// Array of secret words. Words must be longer than 10+.  
'strawberry',
'thanksgiving',
'pennsylvania',
'intermittent',
'exacerbation',
'independence',
'intelligence',
'relationship',
'professional',
'organization',
'appreciation',
'biodiversity',
'architecture',
'acceleration',
'resurrection',
'civilization',
'constipation',
'exasperation',
]

var randomWord = function() {    
    // Function that generates words randomly
    let randomIndex = parseInt(Math.random() * words.length)
    return words[randomIndex] 
}

var wordsArray = []   
// Loop for array content 'words' to match the amount of letters left
          
//get a random using the function above
// then adapt your for loop for the random word

for (var i = 0; i < 12; i++) {
    wordsArray[i] = '_'
    let spacesDiv = $('.spaces')
    spacesDiv.append('<span class="letter">_</span>') 

   // write the _ to the div with class 'spaces'
        //select the div with class spaces
        //then add the underscores

// When loop is done it will recognise length of words
}

// var remainingLetters = words.length 
//               < -- Keeps track of remaining letters and is set to length of words
// while (remainingLetters > 0 ) {
// 
// }
