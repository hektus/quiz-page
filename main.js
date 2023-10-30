const startBtn = document.querySelector(".header__button");
const quizGuide = document.querySelector(".pop-out");
const exitBtn = document.querySelector(".pop-out__btn--exit");
const header = document.querySelector(".header");
const continueBtn = document.querySelector(".pop-out__btn--continue");
const quizPage = document.querySelector(".quiz_page");
const body = document.querySelector("body");
const quizBox = document.querySelector(".quiz-box");

const goHome = document.querySelector(".go-home");

startBtn.addEventListener("click", () => {
  quizGuide.style.display = "block";
  header.classList.add("filter");
});

exitBtn.addEventListener("click", () => {
  quizGuide.style.display = "none";
  header.classList.remove("filter");
});

continueBtn.addEventListener("click", () => {
  quizPage.style.left = "0%";
  header.classList.remove("filter");
  quizGuide.style.display = "none";
  showQuizbox();
});

goHome.addEventListener("click", () => {
  location.reload();
});

tryAgain.addEventListener("click", () => {
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  questionCount = questions[index].number;
  index = 0;
  score = 0;

  displayQuestions();
});

function showQuizbox() {
  setTimeout(function () {
    quizBox.style.display = "block";
  }, 1000);
}
