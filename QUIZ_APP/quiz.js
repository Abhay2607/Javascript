document.addEventListener('DOMContentLoaded', () => {

    const questions = [
        {
            question: "Which of the following is NOT a JavaScript data type?",
            choices: ["String", "Boolean", "Float", "Number"],
            answer: "Float"
        },
        {
            question: "What is the output of console.log(typeof NaN);?",
            choices: ["\"NaN\"", "\"undefined\"", "\"number\"", "\"object\""],
            answer: "\"number\""
        },
        {
            question: "Which method is used to convert a JSON string into a JavaScript object?",
            choices: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
            answer: "JSON.parse()"
        },
        {
            question: "What is the default value of this in a regular JavaScript function (non-strict mode)?",
            choices: ["undefined", "window", "null", "globalThis"],
            answer: "window"
        },
        {
            question: "Which of these is used to declare a block-scoped variable in JavaScript?",
            choices: ["var", "let", "define", "constVar"],
            answer: "let"
        }
    ];


    const startBtn = document.querySelector('#start-btn')                     //Start
    const nextBtn = document.querySelector('#next-btn')                       //Next 
    const restartBtn = document.querySelector('#restart-btn')                 //Restart
    const questionContainer = document.querySelector('#question-container')   //Container(h2,options)
    const questionText = document.querySelector('#question-text')             //Heading
    const choiceList = document.querySelector('#choices-list')                //Options
    const resultContainer = document.querySelector('#result-container')       //Result container
    const finalScore = document.querySelector('#score')                       //Score





    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz)
    nextBtn.addEventListener('click', nextQuestion)


    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add('hidden')
        questionText.textContent = questions[currentQuestionIndex].question
        choiceList.innerHTML = ''
        questions[currentQuestionIndex].choices.forEach(choice => {
            let li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choiceList.appendChild(li)
        });
    }

    function selectAnswer(choice) {
        nextBtn.classList.remove('hidden')

        const correctAnswer = questions[currentQuestionIndex].answer
        const allChoices = choiceList.querySelectorAll('li')

        allChoices.forEach(li => {
            li.style.pointerEvents = 'none';             // stop using multiple clicking

            if (li.textContent === correctAnswer) {
                li.classList.add('correct');
            }
            if (li.textContent === choice && choice !== correctAnswer) {
                li.classList.add('incorrect');
            }
        });

        if (choice === correctAnswer) {
            score++;
        }
    }


    function nextQuestion() {
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            showQuestion()
        } else {
            showResult()
        }
    }

    function showResult() {
        resultContainer.classList.remove('hidden')
        questionContainer.classList.add('hidden')
        finalScore.innerHTML = `${score} out of ${questions.length}`

    }

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden');
        startQuiz()

    })


})

