const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data", data);
  event.target.reset();
  event.target.elements.firstName.focus();
});

const userQuestion = document.querySelector('[data-js="user-question"]');
const charactersLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);

userQuestion.addEventListener("input", (event) => {
  const charsLeft = event.target.maxLength - event.target.value.length;
  charactersLeftQuestion.textContent = charsLeft;

  console.log("first approach: ", event.target.value);
  console.log("second approach: ", userQuestion.value);
  // If you're only using the input element once an it's clear in
  // the context of your code, you might prefer the second approach
  // (input.value). if you're dealing with multiple input elements
  // or if you wnt to reuse the same event handler function for
  // different input elements, the first approach (event.target.value)
  // might be more versatile.
});

const userAnswer = document.querySelector('[data-js="user-answer"]');
const charactersLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

userAnswer.addEventListener("input", (event) => {
  const charsLeft = event.target.maxLength - event.target.value.length;
  charactersLeftAnswer.textContent = charsLeft;

  console.log("first approach: ", event.target.value);
  console.log("second approach: ", userAnswer.value);
  // If you're only using the input element once an it's clear in
  // the context of your code, you might prefer the second approach
  // (input.value). if you're dealing with multiple input elements
  // or if you wnt to reuse the same event handler function for
  // different input elements, the first approach (event.target.value)
  // might be more versatile.
});
