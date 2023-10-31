const btnNext = document.querySelector(".btn-next");
const questionTotal = document.querySelector(".question-total");
const questionText = document.querySelector(".question-text");
const optionList = document.querySelector(".option__list");
const headerScore = document.querySelector(".header-score");
const resultBox = document.querySelector(".result-box");
const yourScore = document.querySelector(".your-score");
const tryAgain = document.querySelector(".try-again");
const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");
const percent = document.querySelector(".percent-container");

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

let score = 0;
let index = 0;
let questionNumb = questions[index].number;

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

function displayQuestions() {
  if (questionNumb <= questions.length) {
    // index++;
    questionTotal.textContent = `${questionNumb} of ${questions.length} Questions`;
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    let options = `<div class="option__list-item">${questions[index].options[0]}</div>
    <div class="option__list-item">${questions[index].options[1]}</div>
    <div class="option__list-item">${questions[index].options[2]}</div>
    <div class="option__list-item">${questions[index].options[3]}</div> `;

    optionList.innerHTML = options;

    selectedOption();
  } else {
    quizBox.style.display = "none";
    yourScore.textContent = `Your Score ${score} out of ${questions.length}`;
    resultBox.style.display = "block";
    showResultBoxProgress();
  }
}

function selected(answer) {
  userAnswer = answer.textContent;
  let correctAnswer = questions[questionNumb - 1].answer;
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

function showResultBoxProgress() {
  let progressStartValue = -1;
  let progressEndValue = (score / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    percent.style.background = `conic-gradient(white ${
      progressStartValue * 3.6
    }deg, grey 0deg)`;
    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  // let maxPercent = 100;

  // const oneQuestionPercent = maxPercent / questions.length;

  // if (score) {
  //   progressValue.textContent = `${score * oneQuestionPercent}%`;
  // }
}

displayQuestions();
