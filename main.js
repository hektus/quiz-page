const startBtn = document.querySelector(".header__button");
const quizGuide = document.querySelector(".pop-out");

startBtn.addEventListener("click", () => {
  quizGuide.style.display = "block";
});
