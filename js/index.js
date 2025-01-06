const bookmarkBtn = document.querySelector('[data-js="bookmark-button"]');

bookmarkBtn.addEventListener("click", () => {
  const bookmarkImg = bookmarkBtn.querySelector("img"); // Select the img inside the button

  // If the button doesn't have the 'active' class, set it to active
  if (!bookmarkBtn.classList.contains("active")) {
    bookmarkBtn.classList.add("active"); // Add the 'active' class
    bookmarkImg.setAttribute("src", "assets/bookmark-selected-card.svg"); // Change image to selected
  } else {
    bookmarkBtn.classList.remove("active"); // Remove the 'active' class
    bookmarkImg.setAttribute("src", "assets/bookmark-unselected-card.svg"); // Change image to unselected
  }
});

// Show/Hide Answer Button
const showAnswerBtn = document.querySelector('[data-js="show-answer-btn"]');
const answerText = document.querySelector('[data-js="answer-text"]');

showAnswerBtn.addEventListener("click", () => {
  toggleAnswer();
});

function toggleAnswer() {
  if (answerText.classList.contains("hidden")) {
    answerText.classList.remove("hidden");
    showAnswerBtn.textContent = "Hide answer";
  } else {
    answerText.classList.add("hidden");
    showAnswerBtn.textContent = "Show answer";
  }
}
