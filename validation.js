const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

//START Anonymous functions {
const insertClassName = (input, className) => {
  input.classList.add(className);
};

const removeClassName = (input, className) => {
  input.classList.remove(className);
};

const elementWithSiblingNode = (input) => {
  const siblingNode = input.nextElementSibling;
  return siblingNode ? true : false;
};

const insertErrorMessage = (input) => {
  input.insertAdjacentHTML('afterend', `<p class="showError">${identifyInputName(input)}</p>`);
};

const validateInputText = (input) => {
  if (input.value === ""){
    insertClassName(input, "error");
    if (!elementWithSiblingNode(input))
      insertErrorMessage(input);
    }

  else {
    removeClassName(input, "error");
    if (elementWithSiblingNode(input))
        input.nextElementSibling.remove();
  }
};
//END Anonymous functions}

//START Functions {
const identifyInputName = (input) => {
  switch (input.name) {
    case "firstName":
      return "El nombre es requerido";
    case "lastName":
      return "El apellido es requerido";
    case "tickets":
      return "La cantidad de entradas es requerida";
    case "price":
      return "precio";
    case "card":
      return "Debe seleccionar una tarjeta para pagar";
    case "emailConfirm":
      return "Debe confirmar el mismo e-mail";
    default:
      return `El ${input.name} es requerido`;
  }
};
//END Functions}



inputs.forEach((input) => {
  input.addEventListener("blur", (e) => validateInputText(e.target))
});

form.addEventListener("submit", (e) => {
  const dataForm = Object.fromEntries(new FormData(e.target));
  e.preventDefault();
  if ( dataForm.email.toLowerCase() !== dataForm.emailConfirm.toLowerCase())
    alert("El e-mail no coincide");
});