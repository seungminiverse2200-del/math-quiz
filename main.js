let score = 0;

let currentAnswer = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;

    currentAnswer = num1 + num2;

    document.getElementById("question").textContent =
        `${num1} + ${num2} = ?`;

    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer =
        Number(document.getElementById("answer").value);

    const result = document.getElementById("result");

    if (userAnswer === currentAnswer) {
        score++;
        result.textContent = "✅ Jawaban Benar!";
        result.className = "correct";
    } else {
        result.textContent =
            `❌ Salah! Jawaban yang benar adalah ${currentAnswer}`;
        result.className = "wrong";
    }

    document.getElementById("score").textContent = score;

    setTimeout(generateQuestion, 1000);
}

generateQuestion();
