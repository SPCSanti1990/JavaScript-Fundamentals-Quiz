// JavaScript for a timed quize based on JavaScript fundementals that stores user high scores

// Variables
// user name, countdown, score
let timeEl = document.querySelector(".time");
let secondsLeft = 60;
let score = 0;
let currentQuestion = 0;
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const choiceList = document.getElementById("choiceList");
const startQuizButton = document.getElementById("startQuiz");

startQuizButton.addEventListener("click", startQuiz);

// Quiz questions and answers

const questions = [
    {
        question:"JavaScript is an ____ language?",
        choices:["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        CorrectAnswer:0
    },
    {
        question:"Which of the following keywords is used to define a variable?",
        choices:["let", "char", "def", "None of the above"],
        answer:0
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript",
        choices:["document.write()", "consol.log()", "window.alert", "All of the above"],
        answer:3
    },
    {
        question:"Which of the following methods is used to access HTML elements using Javascript?",
        choices:["getElementbyId()", "getElementByClassName()", "Both A and B", "None of the above"],
        answer:2
    },
    {
        question:"Which of the following keywords is used to define constant variable?",
        choices:["const", "var", "let", "constant"],
        answer:0
    }
];

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

function startQuiz() {
    startQuizButton.style.display = "none";
     displayQuestion();
     setTime();
}

function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionText.textContent = currentQuestionData.question;
    choiceList.innerHTML = "";

    currentQuestionData.choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = choice;
        listItem.addEventListener("click", () => checkAnswer(index));
        choiceList.appendChild(listItem);
    });
}

// if question answer is right add 1 to score, display new question from array
function checkAnswer(selectedIndex) {
    const currentQuestionData = questions[currentQuestion];
    if (selectedIndex === currentQuestionData.correctAnswer) {
        score++;
    }
// if question answer is wrong subtract time, display new question from array
    else if (selectedIndex !== currentQuestionData.correctAnswer) {
        secondsLeft = secondsLeft - 10;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } 
    else {
        endQuiz();
    }
}

// when time runs out games ends and promps user for name to add to high score
function endQuiz() {
    questionContainer.style.display = "none";
    timeLeftDisplay.textContent = "Time's up!";
    alert(`Quiz Over! Your Score: ${score}/${questions.length}`);
}