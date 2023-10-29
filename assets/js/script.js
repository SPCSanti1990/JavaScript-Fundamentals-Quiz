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
let username = document.getElementById("username");
let contInterval = setInterval(startTimer, 90000);
let timeEl = document.getElementById("timer");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const choiceList = document.getElementById("choiceList");

const startQuizButton = document.getElementById("startQuiz");
const highScoreButton = document.getElementById("highScore");

startQuizButton.addEventListener("click", startQuiz);
highScoreButton.addEventListener("click", highScore);

function highScore() {
    highScoreButton.style.display = "none";
    timeEl.style.display = "none";
    username.style.display = "none";
    const nameText = document.getElementById("nameText");
    nameText.style.display = "none";
    const nameTime = document.getElementById("time");
    nameTime.style.display = "none";

    const scoreList = localStorage.getItem("player");
    const scoreName = JSON.parse(scoreList)
    questionContainer.textContent = "Name: " + scoreName.name + " with a score of  " + scoreName.score;

}
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

// function to cound down timer
function startTimer() {
    if (secondsLeft > 0) {
        timeEl.textContent = secondsLeft;
        secondsLeft--;
    }
    else {
        clearInterval(contInterval);
        endQuiz();
    }
}


function startQuiz() {
    startQuizButton.style.display = "none";
    if (userName = null) {
        alert("Please enter your name.");
        return;
    }
    const nameText = document.getElementById("nameText");
    nameText.style.display = "none";
    username.style.display = "none";
    contInterval = setInterval(startTimer, 1000)
    displayQuestion();
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
function save() {
    let player = {
        name: username.value,
        score: score
      };
    localStorage.setItem("player", JSON.stringify(player));
};

// when time runs out games ends and promps user for name to add to high score
function endQuiz() {
    questionContainer.style.display = "none";
    save();
    clearInterval(contInterval);
    alert(`Quiz Over! Your Score: ${score}/${questions.length}`);

}