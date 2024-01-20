const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const timerDisplay = document.getElementById("timer");
const finalScoreDisplay = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

const startScreen = document.getElementById("start-screen");
const questionsContainer = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const feedbackContainer = document.getElementById("feedback");

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;
let timerInterval;

function startQuiz() {
    startScreen.classList.add('hide');
    questionsContainer.classList.remove('hide');
    timerInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
    displayQuestion(questions[currentQuestionIndex]);
}

function displayQuestion(question) {
    questionTitle.textContent = question.title;
    choicesContainer.innerHTML = '';

    for (let i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i];
        const button = document.createElement('button');
        button.textContent = choice;
        button.setAttribute('data-index', i);
        button.addEventListener('click', function () {
            checkAnswer(i);
        });
        choicesContainer.appendChild(button);
    }
}
function checkAnswer(i) {
    const question = questions[currentQuestionIndex];
    if (question.choices[i] === question.answer) {
        // The answer is correct
        score++;
        feedbackContainer.textContent = "Correct!";
    } else {
        // The answer is incorrect
        timeLeft -= 10; // Deduct 10 seconds as a penalty
        feedbackContainer.textContent = "Incorrect!";
    }
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        // If there are more questions, display the next one
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        // Otherwise, end the quiz
        endQuiz();
    }
}

// function checkAnswer(answerIndex) {
//     const question = questions[currentQuestionIndex];
//     if (answerIndex === question.answer) {
//         showFeedback('Correct!', 'correct');
//         score++;
//     } else {
//         showFeedback('Incorrect!', 'incorrect');
//         timeLeft -= 10;
//     }
//     currentQuestionIndex++;
//     if (currentQuestionIndex >= questions.length) {
//         endQuiz();
//     } else {
//         displayQuestion(questions[currentQuestionIndex]);
//     }
// }

function endQuiz() {
    clearInterval(timerInterval);
    questionsContainer.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreDisplay.textContent = score;
}

function showFeedback(message, className) {
    feedbackContainer.textContent = message;
    feedbackContainer.setAttribute('class', className);
    setTimeout(function () {
        feedbackContainer.textContent = '';
    }, 1000);
}

function saveScore() {
    const initials = initialsInput.value;
    if (initials === '') {
        alert('Please enter your initials.');
        return;
    }
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const newScore = {
        initials: initials,
        score: score,
    };
    highScores.push(newScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'highscores.html';
}

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);
