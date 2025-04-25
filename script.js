const question = [
    {
        question: "Which of the Following is Capital OF INDIA?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Nagpur", correct: false },
            { text: "Delhi", correct: true },
            { text: "Gujarat", correct: false }
        ]
    },
    {
        question: "Where is the Tallest Building Located?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Dubai", correct: true },
            { text: "China", correct: false },
            { text: "Surat", correct: false }
        ]
    },
    {
        question: "Who is Home Minister of India?",
        answers: [
            { text: "Amit Shah", correct: true },
            { text: "J.P Nadda", correct: false },
            { text: "Rahul Gandhi", correct: false },
            { text: "Arvind Kejriwal", correct: false }
        ]
    },
    {
        question: "Who was the Prime Minister Who Announced Emergency In India?",
        answers: [
            { text: "Indira Gandhi", correct: true },
            { text: "Dr. Rajendra Prasad", correct: false },
            { text: "Lal Bahadur Shastri", correct: false },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "What Is the formula of Water?",
        answers: [
            { text: "Caco2", correct: false },
            { text: "Cn", correct: false },
            { text: "H2O", correct: true },
            { text: "Naco", correct: false }
        ]
    },
    {
        question: "In Which Year India's First Train Started?",
        answers: [
            { text: "1976", correct: false },
            { text: "1957", correct: false },
            { text: "1902", correct: false },
            { text: "1853", correct: true }
        ]
    },
    {
        question: "GST Stands for?",
        answers: [
            { text: "Get & Set Tax", correct: false },
            { text: "Goods & serving Tax", correct: false },
            { text: "Gujarat & Surat Tax", correct: false },
            { text: "Goods & Service Tax", correct: true }
        ]
    },
    {
        question: "Which place is most wet place in India?",
        answers: [
            { text: "Chikhaldara", correct: false },
            { text: "Cherrapunji", correct: true },
            { text: "Gaganbawda", correct: false },
            { text: "Dehradun", correct: false }
        ]
    },
    {
        question: "Which is the Financial Capital Of India?",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Nagpur", correct: false },
            { text: "Delhi", correct: false },
            { text: "Gujarat", correct: false }
        ]
    },
    {
        question: "Which Stock Exchanges operate in India?",
        answers: [
            { text: "NST & BST", correct: false },
            { text: "CSE & BSE", correct: false },
            { text: "NSE & BSE", correct: true },
            { text: "EST & BST", correct: false }
        ]
    }
];

const questionTR = document.getElementById("question");
const ansTR = document.getElementById("answer-btn");
const nextBTN = document.getElementById("next-btn");

let preQueInd = 0;
let marks = 0;

function startQuiz() {
    preQueInd = 0;
    marks = 0;
    nextBTN.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let curQue = question[preQueInd];
    let queNo = preQueInd + 1;
    questionTR.innerHTML = queNo + ". " + curQue.question;

    curQue.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
        ansTR.appendChild(button);
    });
}

function resetState() {
    nextBTN.style.display = "none";
    while (ansTR.firstChild) {
        ansTR.removeChild(ansTR.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        marks++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansTR.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBTN.style.display = "block";
}

nextBTN.addEventListener("click", () => {
    preQueInd++;
    if (preQueInd < question.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionTR.innerHTML = `Your Score: ${marks} / ${question.length}`;
    nextBTN.innerHTML = "Play Again";
    nextBTN.style.display = "block";
    nextBTN.addEventListener("click", startQuiz);
}

startQuiz();
