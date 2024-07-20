const stages = {
    stage1: [
        { question: "Euro 50", answer: "3" },
        { question: "Die Wahlbeteiligung", answer: "13" },
        { question: "nicht sicher", answer: "14" },
        { question: "Fahrschul", answer: "14" },
        { question: "Berlin", answer: "15" },
        { question: "Erbeben", answer: "15" },
        { question: "Fluggesellschaft", answer: "15" },
        { question: "Lufthansa", answer: "23" },
        { question: "Insel Bali", answer: "45" },
        { question: "Frau Jürgens", answer: "345" },
    ],
    stage2: [
        { question: "Professor steiner", answer: "290" },
        { question: "herr Steiner", answer: "29014" },
        { question: "Mallorca", answer: "347" },
        { question: "Meron Merkoda", answer: "459" },
        { question: "Roland aufsteigen", answer: "3479" },
        { question: "Julia", answer: "13458" },
        { question: "Roland höheren Liga", answer: "23589" },
        { question: "Nadin", answer: "235680" },
        { question: "Tu Dresden", answer: "357801" },
        { question: "Carina", answer: "134890" },
        { question: "Roland spielen", answer: "234790" },
        { question: "Frau Kinder", answer: "2367019" },
    ],
    stage3: [
        { question: "Telefon", answer: "1" },
        { question: "Raum", answer: "2" },
        { question: "Radio konzert", answer: "13" },
        { question: "Reittunier", answer: "13" },
        { question: "Fahrschul", answer: "14" },
        { question: "Tag des Ehrenamts", answer: "15" },
        { question: "Internet pruffen", answer: "15" },
        { question: "Für ein konzert", answer: "24" },
        { question: "Die Demonstration", answer: "25" },
        { question: "Buchhandlung", answer: "135" },
        { question: "Delikatessen", answer: "234" },
        { question: "Blutspenden", answer: "1345" },
    ],
};

let currentStage = [];
let currentQuestionIndex = 0;
let score = 0;

document.getElementById('stage1Button').addEventListener('click', () => startStage('stage1'));
document.getElementById('stage2Button').addEventListener('click', () => startStage('stage2'));
document.getElementById('stage3Button').addEventListener('click', () => startStage('stage3'));

document.getElementById('submitButton').addEventListener('click', submitAnswer);

function startStage(stage) {
    currentStage = stages[stage];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('scoreText').classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const question = currentStage[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('answerInput').value = '';
}

function submitAnswer() {
    const answer = document.getElementById('answerInput').value;
    const correctAnswer = currentStage[currentQuestionIndex].answer;

    if (answer === correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentStage.length) {
        showQuestion();
    } else {
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('scoreText').classList.remove('hidden');
        document.getElementById('scoreText').textContent = `Your final score is: ${score} out of ${currentStage.length}`;
    }
}
