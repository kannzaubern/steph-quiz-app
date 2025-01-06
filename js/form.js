const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get input values
  const userQuestion = document.querySelector(
    '[data-js="user-question"]'
  ).value;
  const userAnswer = document.querySelector('[data-js="user-answer"]').value;
  const userTag = document.getElementById("user-tag").value;

  // Create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create elements for question, answer, and tag
  const newQuestion = document.createElement("h2");
  newQuestion.textContent = userQuestion;

  const newAnswer = document.createElement("h3");
  newAnswer.textContent = userAnswer;

  const newTag = document.createElement("span");
  newTag.classList.add("userTag");
  newTag.textContent = userTag;

  // Append elements to the card
  card.append(newQuestion, newAnswer, newTag);

  form.insertAdjacentElement("afterend", card);
  form.reset();
});

const charactersLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);

userQuestion.addEventListener("input", (event) => {
  const charsLeft = event.target.maxLength - event.target.value.length;
  charactersLeftQuestion.textContent = charsLeft;
});

const charactersLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

userAnswer.addEventListener("input", (event) => {
  const charsLeft = event.target.maxLength - event.target.value.length;
  charactersLeftAnswer.textContent = charsLeft;
});
