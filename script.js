// JavaScript for a timed quize based on JavaScript fundementals that stores user high scores

// Variables
// user name, countdown, score
let timeEl = document.querySelector(".time");
let secondsLeft = 75;

// array of objects containing questions, correct answers, and choices

// function to add new users and high scores
function highScore (name, score) {
    this.user = name;
    this.point = score;
}
// function to cound down timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);

      }
  
    }, 1000);
  }
// while loop until time runs out

// if question answer is right add 1 to score, display new question from array

// if question answer is wrong subtract time, display new question from array

// when time runs out games ends and promps user for name to add to high score