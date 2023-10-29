// JavaScript for a timed quiz based on JavaScript fundementals that stores user high scores

// Quiz questions and answers

const questions = [
    {
        question:"JavaScript is an ____ language?",
        choices:["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        CorrectAnswer: "Object-Oriented"
    },
    {
        question:"Which of the following keywords is used to define a variable?",
        choices:["let", "char", "def", "None of the above"],
        CorrectAnswer: "let"
    },
    {
        question:"Which of the following methods can be used to display data in some form using Javascript",
        choices:["document.write()", "consol.log()", "window.alert", "All of the above"],
        CorrectAnswer: "All of the above"
    },
    {
        question:"Which of the following methods is used to access HTML elements using Javascript?",
        choices:["getElementbyId()", "getElementByClassName()", "Both A and B", "None of the above"],
        CorrectAnswer: "Both A and B"
    },
    {
        question:"Which of the following keywords is used to define constant variable?",
        choices:["const", "var", "let", "constant"],
        CorrectAnswer: "const"
    }
];
// Variables
// user name, countdown, score
let score = 0;
let currentQuestion = 0;
let secondsLeft = 60;
let username = "";
//const timer = setInterval(startTimer, 1000);

let timeEl = document.querySelector("timer");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const choiceList = document.getElementById("choiceList");

const startQuizButton = document.getElementById("startQuiz");
const highScoreButton = document.getElementById("highScore");

startQuizButton.addEventListener("click", startQuiz);

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const currentQuestionData = questions[currentQuestion];
        questionText.textContent = currentQuestionData.question;
        choiceList.innerHTML = "";

        currentQuestionData.choices.forEach((choice) => {
            const listItem = document.createElement("li");
            listItem.textContent = choice;
            listItem.addEventListener("click", checkAnswer);
            choiceList.appendChild(listItem);
    });
}}


// function to add new users and high scores
function highScore () {
    const player = {
        name: highScore.value,
        score: highScore.value
    };
    localStorage.setItem('High Scores', JSON.stringify(player));
}


// function to cound down timer
/* function startTimer() {
    if (secondsLeft > 0) {
        timeEl.textContent = secondsLeft + " seconds";
        secondsLeft--;
    }
    else {
        endQuiz();
    }
  } */


function startQuiz() {
    startQuizButton.style.display = "none";
     displayQuestion();
    // startTimer();
}


// if question answer is right add 1 to score, display new question from array
function checkAnswer(event) {
    const question = questions[currentQuestion];
    const selectedAnswer = event.target.textContent;
    if (selectedAnswer === question.CorrectAnswer) {
        score++;
    }
// if question answer is wrong subtract time, display new question from array
    else if (selectedAnswer !== question.CorrectAnswer) {
       // secondsLeft = secondsLeft - 10;
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
   // timeEl.textContent = "Time's up!";
    localStorage.setItem('High Scores', JSON.stringify(highScore));
    alert(`Quiz Over! Your Score: ${score}/${questions.length}`);
}