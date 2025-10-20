// 1. Create an array named questions
const questions = [ 
    {
        category: "Food",
        question: "Which of the following is popular ilocano Dish?",
        choices: ["Adobo", "Tinola", "Sinigang"],
        answer: "Tinola"
    },
    {
        category: "Human",
        question: "Who cure the sick?",
        choices: ["Teacher", "Police", "Doctor"],
        answer: "Doctor"
    },
    {
        category: "Things",
        question: "Which device is commonly used for programming?",
        choices: ["Laptop", "Microwave", "Calculator"],
        answer: "Laptop"
    },
    {
        category: "Places",
        question: "Which country is known as the Pearl of the Orient Seas?",
        choices: ["Taiwan","Philippines", "Japan", "China"],
        answer: "Philippines"
    },
    {
        category: "Events",
        question: "What event is celebrated in Baguio City every February?",
        choices: ["Panagbenga Festival", "Sinulog Festival", "Ati-Atihan Festival"],
        answer: "Panagbenga Festival"
    }
];

// 2. Function to get a random Question
function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

// 3. Function to get a random Choice
function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];    
}

// 4. Function to get result
function getResults(questionObject, computerChoice){
    if (computerChoice === questionObject.answer){
    return "The computer's choice is correct!"; 
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
    }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

console.log("Question: ", randomQuestion.question);
console.log("Computer Choice: ", computerChoice);
console.log(result);

