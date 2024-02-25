const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");

inputField.addEventListener("input", (handler) => {
  outputField.textContent = handler.target.value.trim();
  if (!outputField.textContent) {
    outputField.textContent = "Anonymous";
  }
});
