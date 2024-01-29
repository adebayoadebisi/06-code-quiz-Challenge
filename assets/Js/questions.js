    const questions = [
        {
            question: "What is the HTML tag under which one can write the JavaScript code?",
            choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
            answer: 2,
        },
        {
            question: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: 2,
        },
        {
            question: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: 2,
        },
        {
            question: "Arrays in JavaScript can be used to store ____.",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: 3,
        },
        {
            question: "String values must be enclosed within ____ when being assigned to variables.",
            choices: ["commas", "curly brackets", "quotes", "parentheses"],
            answer: 2,
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
            answer: 3,
        },
        {
            question: "Which of the following is not a reserved word in JavaScript?",
            choices: ["interface", "throws", "program", "short"],
            answer: 2,
        },
        {
            question: "Which of the following is not a valid JavaScript variable name?",
            choices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
            answer: 0,
        },
        {
            question: "What is the correct JavaScript syntax to write 'Hello World'?",
            choices: ["System.out.println('Hello World')", "println ('Hello World')", "document.write('Hello World')", "response.write('Hello World')"],
            answer: 2,
        },
        {
            question: "Which of the following is an advantage of using JavaScript?",
            choices: ["Increased interactivity.", "Less server interaction.", "Immediate feedback from the users.", "All of the above."],
            answer: 3,
        }
    ];
    
    // Shuffle the questions array
    for (let i = 0; i < questions.length; i++) {
        let j = Math.floor(Math.random() * questions.length);
        let temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }

    // // Randomize the order of the choices but still ensure correct answer is detected as correct answer and not just the correct index.
    // for (let i = 0; i < questions.length; i++) {
    //     // set correct answer
    //     questions[i].answer = Math.floor(Math.random() * questions[i].choices.length);
    //     // shuffle choices
    //     for (let j = 0; j < questions[i].choices.length; j++) {
    //         let k = Math.floor(Math.random() * questions[i].choices.length);
    //         let temp = questions[i].choices[j];
    //         questions[i].choices[j] = questions[i].choices[k];
    //         questions[i].choices[k] = temp;
    //     }
    // }

    // questions.forEach(question => {
    //     // set correct answer
    //     question.answer = Math.floor(Math.random() * question.choices.length);
    //     // shuffle choices
    //     for (let i = 0; i < question.choices.length; i++) {
    //         let j = Math.floor(Math.random() * question.choices.length);
    //         let temp = question.choices[i];
    //         question.choices[i] = question.choices[j];
    //         question.choices[j] = temp;
    //     }
    // }
    // );
    

