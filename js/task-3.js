const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");

inputField.addEventListener("input", (handler) => {
  outputField.textContent = handler.target.value;
  if (!handler.target.value) {
    outputField.textContent = "Anonymous";
  }
});
