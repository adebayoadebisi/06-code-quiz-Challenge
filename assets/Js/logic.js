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
let timeLeft = 100;
let score = 0;
let timerInterval;

// Import sfx Sounds
let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");

// Function to start the quiz and display the first question 
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

// Function to display the current question and choices 
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

// Function to display feedback for correct or incorrect answers
function showFeedback(message) {
    feedbackContainer.textContent = message;
    feedbackContainer.setAttribute('class', `feedback`);
    setTimeout(function () {
        feedbackContainer.setAttribute('class', 'feedback hide');
    }, 1000);
}

// Function to check if the answer is correct or incorrect
// If the answer is correct, add 10 points to the score
// If the answer is incorrect, deduct 10 seconds from the timer
function checkAnswer(e) {
    let i = e.target.getAttribute('data-index');
    let question = questions[currentQuestionIndex];    
    if (question.choices[i] === question.choices[question.answer]) {
        sfxCorrect.play();
        showFeedback('Correct!');       
        score += 10;        
    } else {
        sfxIncorrect.play();
        showFeedback('Incorrect!');        
        timeLeft -= 10;     
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

// End the quiz and display the final score 
function endQuiz() {
    clearInterval(timerInterval);
    questionsContainer.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreDisplay.textContent = score;
}

// Save the score to local storage and move to the high scores page
// Delete the last high score if there are more than 20 high scores in local storage to save memory.
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

// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);
