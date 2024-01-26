let startButton = document.getElementById("start");
let questionTitle = document.getElementById("question-title");
let choicesContainer = document.getElementById("choices");
let timerDisplay = document.getElementById("time");
let finalScoreDisplay = document.getElementById("final-score");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");

let startScreen = document.getElementById("start-screen");
let questionsContainer = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let feedbackContainer = document.getElementById("feedback");

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;
let timerInterval;

// Import sfx Sounds
let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
    startScreen.classList.add('hide');
    questionsContainer.classList.remove('hide');
    timerInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            timerDisplay.textContent = 0;
            endQuiz();
        }
    }, 1000);
    displayQuestion(questions[currentQuestionIndex]);
}

function displayQuestion(question) {
    questionTitle.textContent = question.question;
    choicesContainer.innerHTML = '';

    for (let i = 0; i < question.choices.length; i++) {
        let choice = question.choices[i];
        let button = document.createElement('button');
        button.textContent = choice;
        button.setAttribute('data-index', i);
        button.onclick = checkAnswer;
        choicesContainer.appendChild(button);
    }
}

function showFeedback(message) {
    feedbackContainer.textContent = message;
    feedbackContainer.setAttribute('class', `feedback`);
    setTimeout(function () {
        feedbackContainer.setAttribute('class', 'feedback hide');
    }, 1000);
}

function checkAnswer(e) {
    let i = e.target.getAttribute('data-index');
    console.log(i);
    // currentQuestionIndex++;
    // displayQuestion(questions[currentQuestionIndex])
    // console.log(questions[currentQuestionIndex]);
    let question = questions[currentQuestionIndex];
    // console.log(question.choices[i]);
    // console.log(question.answer);
    // console.log(question.choices[question.answer]);
    if (question.choices[i] === question.choices[question.answer]) {
        sfxCorrect.play();
        showFeedback('Correct!');
        // console.log("correct");
        // The answer is correct
        score += 10; // Add 10 points to the score
        // feedbackContainer.textContent = "Correct!";
    } else {
        sfxIncorrect.play();
        showFeedback('Incorrect!');
        // The answer is incorrect
        timeLeft -= 10; // Deduct 10 seconds as a penalty
        // feedbackContainer.textContent = "Incorrect!";
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
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    if (highScores.length > 20) {
        highScores.pop();
    }
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.href = 'highscores.html';
}
// // function to display the last 10 highscores in order after initials are entered and quiz is over.
// functdisplayHighScoresion () {
//     const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
//     highScores.sort(function (a, b) {
//         return b.score - a.score;
//     });
//     console.log(highScores);
//     highScores.splice(10);
//     const highScoreList = document.getElementById('highScores');
//     highScoreList.innerHTML = highScores
//         .map(function (score) {
//             return `<li class="high-score">${score.initials} - ${score.score}</li>`;
//         })
//         .join('');
// }
// // Function to clear scores if more than 20 highscores in local storage to save memory.
// function clearScores() {
//     if (confirm('Are you sure you want to clear the high scores?')) {
//         localStorage.removeItem = 'highScores';
//         window.location.reload();
//     }
// }

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);
