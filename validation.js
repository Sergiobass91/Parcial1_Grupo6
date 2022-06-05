const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const validateInputNotEmpty = (input) => {
  if (input.value === "") input.style.backgroundColor = "#c88383f6";
  //if (input.value === "") input.classList.add("emptyInput");
};

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => validateInputNotEmpty(e.target));
});

form.addEventListener("submit", (e) => {
  //e.preventDefault();
  const dataForm = Object.fromEntries(new FormData(e.target));

  console.log(dataForm);
});
