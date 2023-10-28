// JavaScript for a timed quize based on JavaScript fundementals that stores user high scores

// Variables
// user name, countdown, score
let timeEl = document.querySelector(".time");
let secondsLeft = 75;

// Class used to create question, answer, and choices
class Question {
    constructor(question, answer, choice1, choice2, choice3) {
        this.question = question;
        this.answer = answer;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.choice3 = choice3;
    }
}
// Question objects
const question1 = new Question();
const question2 = new Question();
const question3 = new Question();
const question4 = new Question();

// array of objects containing questions, correct answers, and choices
const questions = [question1, question2, question3, question4];

// function to add new users and high scores
function highScore (name, score) {
    this.user = name;
    this.point = score;
}
// function to cound down timer
function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
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