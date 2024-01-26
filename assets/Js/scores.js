// // function to display the last 10 highscores in order after initials are entered and quiz is over.
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(highScores);
    highScores.splice(10);
    const highScoreList = document.getElementById('highScores');
    highScoreList.innerHTML = highScores
        .map(function (score) {
            return `<li class="high-score">${score.initials} - ${score.score}</li>`;
        })
        .join('');
}
// Function to clear scores if more than 20 highscores in local storage to save memory.
function clearScores() {
    if (confirm('Are you sure you want to clear the high scores?')) {
        window.localStorage.removeItem('highScores');
        window.location.reload();
    }
}
document.getElementById('clear').onclick = clearScores;
displayHighScores();
