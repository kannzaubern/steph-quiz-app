const questions = [
  {
    text: "What is the name of the coffee shop where the Friends hang out?",
    answer: "Central Perk",
    tags: ["Easy", "Geography", "Trivia"],
  },
  {
    text: "What is the surname of Ross and Monica?",
    answer: "Geller",
    tags: ["Easy", "Family"],
  },
  {
    text: "Which of the 50 U.S. states could Ross not name?",
    answer: "Delaware",
    tags: ["Hard", "Geography"],
  },
  {
    text: "What does Joey never share?",
    answer: "Food",
    tags: ["Easy", "Funny"],
  },
];

const cardSection = document.querySelector(".quiz-questions");

for (let question of questions) {
  console.log("Question: ", question);

  const card = document.createElement("section");
  card.classList.add("card");

  // Elements to add to the card
  const questionText = newQuestion(question.text); // Question text
  const answerText = newAnswer(question.answer); // Answer text
  const questionTags = newTags(question.tags); // Tags
  const bookmark = createBookmark(); // Bookmark
  const showAnswerButton = createShowAnswerButton(answerText, question.answer); // Show Answer Button

  card.append(
    bookmark,
    questionText,
    answerText,
    questionTags,
    showAnswerButton
  );
  cardSection.append(card);
}

// Function to create tags
function newTags(tags = []) {
  const tagContainer = document.createElement("ul"); // Use <ul> instead of <div>
  tagContainer.classList.add("tag-container");

  tags.forEach((tag) => {
    const questionTag = document.createElement("li"); // Use <li> for each tag
    questionTag.classList.add("tag");
    questionTag.textContent = tag;
    tagContainer.appendChild(questionTag);
  });

  return tagContainer;
}

// Function to create the bookmark
function createBookmark() {
  const bookmark = document.createElement("img");
  bookmark.setAttribute("src", "assets/bookmark-select.svg");
  return bookmark;
}

function newQuestion(text) {
  const questionText = document.createElement("h2");
  questionText.textContent = text;
  return questionText;
}

function newAnswer(answer) {
  const headingAnswer = document.createElement("h3");
  headingAnswer.textContent = "Answer hidden"; // Placeholder text
  headingAnswer.dataset.answer = answer; // Store the actual answer in a data attribute
  return headingAnswer;
}

function createShowAnswerButton(answerElement, correctAnswer) {
  const button = document.createElement("button");
  button.textContent = "Show answer"; // Initial button text
  button.classList.add("show-answer-btn");

  button.addEventListener("click", () => {
    if (button.textContent === "Show answer") {
      answerElement.textContent = correctAnswer; // Show the actual answer
      button.textContent = "Hide answer"; // Update button label
    } else {
      answerElement.textContent = "Answer hidden"; // Hide the answer
      button.textContent = "Show answer"; // Update button label
    }
  });

  return button;
}
