# 06 Code Quiz Challenge

# Code Quiz

## Description
This activity requires the building of a timed coding quiz with multiple-choice questions. The app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## User Story
AS a new employee setting up my secure company profile I WANT to randomly generate a password that meets the company’s security criteria SO THAT I can access the companies intranet securely.

## Acceptance Criteria
- **GIVEN** a user opens the quiz,
  - **WHEN** the user starts the quiz by clicking on the start button,
  - **THEN** a timer should start, and the first question should appear.

- **GIVEN** a user is presented with a question,
  - **WHEN** the user sees the question,
  - **THEN** buttons for each possible answer should be displayed.

- **GIVEN** a user clicks on an answer,
  - **WHEN** the user clicks on an answer,
  - **THEN** the next question should appear.

- **GIVEN** a user clicks on an incorrect answer,
  - **WHEN** the user clicks on an incorrect answer,
  - **THEN** time should be subtracted from the timer.

- **GIVEN** a user answers all questions or the timer reaches 0,
  - **WHEN** either condition is met,
  - **THEN** the quiz should end.

- **GIVEN** the quiz has ended,
  - **WHEN** the quiz is over,
  - **THEN** the user's score should be displayed.

- **GIVEN** the quiz has ended,
  - **WHEN** the quiz is over,
  - **THEN** the user should be given the ability to save their initials and their score.

## Password Generator Application
The following images shows the Code Quiz displaying a working application.

![Code Quiz: Screenshot Start Page](./assets/images/quiz-start-page.png)

> **Note** This is a screenshot of the deployed Code Quiz Start Page.

![Code Quiz: Screenshot Questions Page](./assets/images/quiz-questions.png)

> **Note** This is a screenshot of the deployed Code Quiz Questions Page.

![Code Quiz: Screenshot Highscore Page](./assets/images/quiz-highscore.png)

> **Note** This is a screenshot of the deployed Code Quiz Highscore Page.

![Code Quiz: Functionality](./assets/images/quiz-recording.gif)

> **Note** This is a video of the Code Quiz showing all the required criteria.

## References
[MDN Web Docs - Window: localStorage property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[MDN Web Docs - JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

[MDN Web Docs - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[MDN Web Docs - Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## License
Licensed under the MIT License

## GitHub Repository
URL: https://github.com/adebayoadebisi/06-code-quiz-Challenge

## Deployed Web Application
URL: https://adebayoadebisi.github.io/06-code-quiz-Challenge/
