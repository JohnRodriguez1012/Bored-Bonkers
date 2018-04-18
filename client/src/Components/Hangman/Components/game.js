import React, { Component } from 'react';
// import Navbar from './Components/Nav/Nav.js';
import Axios from 'axios';
const wordsInPlay = "";

class GameLogic extends Component {

  state = {  
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0
    }

  setupGame () {
    var objKeys = Object.keys(this.wordsToPick);

    this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    this.lettersOfTheWord = this.wordInPlay.split("");

    this.rebuildWordView();

    this.processUpdateTotalGuesses();
  };

  // run whenever the user guesses a letter
  updatePage (letter) {
    // Restart the game.
    if (this.guessesLeft === 0) {
      this.restartGame();
    }
    else {
      this.updateGuesses(letter);
      this.updateMatchedLetters(letter);
      this.rebuildWordView();

    if (this.updateWins() === true) {
      this.restartGame();
      }
    }
  };

  // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
  updateGuesses (letter) {
    if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {

      // Add the letter to the guessedLetters array.
      this.guessedLetters.push(letter);

      // Decrease guesses by one.
      this.guessesLeft--;

      // Update guesses remaining and guesses letters on the page.
      document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
      document.querySelector("#guessed-letters").innerHTML =
      this.guessedLetters.join(", ");
    }
  };

  // This function sets the initial guesses the user gets.
  processUpdateTotalGuesses () {
    this.totalGuesses = this.lettersOfTheWord.length + 5;
    this.guessesLeft = this.totalGuesses;

    // Render the guesses left to the page.
    document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
  };

  // This function governs what happens if the user makes a successful guess.
  updateMatchedLetters (letter) {
    // Loop through the letters of the "solution".
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      // If the guessed letter is in the solution, and we haven't guessed it already..
      if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
        // Push the newly guessed letter into the matchedLetters array.
        this.matchedLetters.push(letter);
      }
    }
  };

  // This function builds the display of the word that is currently being guessed.
  // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
  rebuildWordView () {
    // We start with an empty string.
    var wordView = "";

    // Loop through the letters of the word we are trying to guess..
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      // If the current letter has been guessed, display that letter.
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
        wordView += this.lettersOfTheWord[i];
      }
      // If it hasn't been guessed, display a "_" instead.
      else {
        wordView += "&nbsp;_&nbsp;";
      }
    }

    // Update the page with the new string we built.
    document.querySelector("#current-word").innerHTML = wordView;
  };

  //"restarts" all of the variables.
  restartGame () {
    document.querySelector("#guessed-letters").innerHTML = "";
    this.wordInPlay = null;
    this.lettersOfTheWord = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesLeft = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.setupGame();
    this.rebuildWordView();
  }

  // Function that checks to see if the user has won.
  updateWins () {
    var win;

    // this won't work for words with double or triple letters
    // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
    // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

    // If you haven't correctly guessed a letter in the word yet, we set win to false.
    if (this.matchedLetters.length === 0) {
      win = false;
    }
    // Otherwise, we set win to true.
    else {
      win = true;
    }

    // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
    // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
        win = false;
      }
    }

    // If win is true...
    if (win) {

      // Increment wins.
      this.wins = this.wins + 1;

      // Update wins on the page.
      document.querySelector("#wins").innerHTML = this.wins;

      // Update the song title and band on the page.
      document.querySelector("#music").innerHTML = this.wordsToPick[this.wordInPlay].song +
      " By " + this.wordInPlay;


      // restart of our game in the updatePage function.
      return true;
    }
    //updatePage function. The game goes on!
    return false;
  }

  // When a key is pressed..
  onkeyup (event) {
    this.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    this.updatePage(this.letterGuessed);
  };



};

export default GameLogic;



