const btnNext = document.querySelector(".btn-next");
const questionTotal = document.querySelector(".question-total");
const questionText = document.querySelector(".question-text");
const optionList = document.querySelector(".option__list");
const headerScore = document.querySelector(".header-score");

let score = 0;
let index = 0;

let questions = [
  {
    number: 1,
    question: "Whats does HTML stand for?",
    answer: "C. Hyper Text Markup Language",
    options: [
      "A. Hyper Type Multi Language",
      "B. Hyper Text Multiple Language",
      "C. Hyper Text Markup Language",
      "D. Home Text Multi Language",
    ],
  },
  {
    number: 2,
    question: "Whats 2 ",
    answer: "C. Hyper Text Markup Language2",
    options: [
      "A. Hyper Type Multi Language2",
      "B. Hyper Text Multiple Language2",
      "C. Hyper Text Markup Language2",
      "D. Home Text Multi Language2",
    ],
  },
  {
    number: 3,
    question: "Whats 3",
    answer: "C. Hyper Text Markup Language3",
    options: [
      "A. Hyper Type Multi Language3",
      "B. Hyper Text Multiple Language3",
      "C. Hyper Text Markup Language3",
      "D. Home Text Multi Language3",
    ],
  },
  {
    number: 4,
    question: "Whats 4",
    answer: "C. Hyper Text Markup Language4",
    options: [
      "A. Hyper Type Multi Language4",
      "B. Hyper Text Multiple Language4",
      "C. Hyper Text Markup Language4",
      "D. Home Text Multi Language4",
    ],
  },
  {
    number: 5,
    question: "Whats 5",
    answer: "C. Hyper Text Markup Language5",
    options: [
      "A. Hyper Type Multi Language5",
      "B. Hyper Text Multiple Language5",
      "C. Hyper Text Markup Language5",
      "D. Home Text Multi Language5",
    ],
  },
];

let questionCount = questions[index].number;

function selectedOption() {
  const option = [...document.querySelectorAll(".option__list-item")];
  option.forEach((option) => {
    option.setAttribute("onclick", "selected(this)");
  });
}

function clearOtherOptions() {
  const option = [...document.querySelectorAll(".option__list-item")];
  option.forEach((option) => {
    option.setAttribute("onclick", "");
    option.style.cursor = "default";
    option.style.backgroundColor = "black";
  });
}

selectedOption();

function displayQuestions() {
  if (questionCount < questions.length) {
    questionCount++;
    index++;
    questionTotal.textContent = `${questionCount} of ${questions.length} Questions`;
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    let options = `<div class="option__list-item">${questions[index].options[0]}</div>
    <div class="option__list-item">${questions[index].options[1]}</div>
    <div class="option__list-item">${questions[index].options[2]}</div>
    <div class="option__list-item">${questions[index].options[3]}</div> `;

    optionList.innerHTML = options;
  } else {
    quizBox.style.display = "none";
  }
}

function selected(answer) {
  userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount - 1].answer;
  if (userAnswer === correctAnswer) {
    answer.classList.add("correct-answer");
    if (score < questions.length) {
      score++;
      headerScore.textContent = `Score ${score}/${questions.length}`;
      clearOtherOptions();
    }
  } else {
    answer.classList.add("bad-answer");
    clearOtherOptions();
  }
}

btnNext.addEventListener("click", () => {
  displayQuestions();
  selectedOption();
});
