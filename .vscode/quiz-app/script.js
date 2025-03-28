document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      answer: "Mitochondria",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "H2"],
      answer: "H2O",
    },
  ];

  const quizForm = document.getElementById("quizForm");
  const questionsContainer = document.getElementById("questionsContainer");
  const resultContainer = document.getElementById("resultContainer");
  const scoreElement = document.getElementById("score");

  questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = q.question;
    questionElement.appendChild(questionTitle);

    q.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question${index}`;
      optionInput.value = option;
      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      questionElement.appendChild(optionLabel);
    });

    questionsContainer.appendChild(questionElement);
  });

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;

    questions.forEach((q, index) => {
      const selectedOption = quizForm[`question${index}`].value;
      if (selectedOption === q.answer) {
        score++;
      }
    });

    scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    resultContainer.style.display = "block";
  });
});
