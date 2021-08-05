function english() {
  import("./modules/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("name").placeholder = "Name Example: Nick";
  document.getElementById("age").placeholder = "Age Example: 24";
  document.getElementById("email").placeholder =
    "Example: name.lastname@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Name:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Age:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
}
function português() {
  import("./modules/language.js").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("name").placeholder = "Exemplo de Nome: Nick";
  document.getElementById("age").placeholder = "Exemplo de idade: 24";
  document.getElementById("email").placeholder =
    "Exemplo: nome.sobrenome@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nome:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Idade:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
}
function français() {
  import("./modules/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("name").placeholder = "Exemple de nom: Nick";
  document.getElementById("age").placeholder = "Exemple d'âge: 24 ";
  document.getElementById("email").placeholder =
    "Exemple d'email: nom.nom@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nom:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Âge:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
}
function español() {
  import("./modules/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("name").placeholder = "Ejemplo de nombre: Nick";
  document.getElementById("age").placeholder = "Ejemplo de edad: 24";
  document.getElementById("email").placeholder =
    "Ejemplo: nombre.apellido@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nombre:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Edad:";
  document.getElementById("headingTextInputIdEmail").innerHTML =
    "Correo electrónico:";
}
function themeTypeLight() {
  import("./modules/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let input of document.querySelectorAll(".headingTextInputId"))
    input.style.cssText = "color: #1F3B4D;";
}
function themeTypeDark() {
  import("./modules/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let input of document.querySelectorAll(".headingTextInputId"))
    input.style.cssText = "color: #DDD;";
}

let nameField = document.getElementById("name");
nameField.addEventListener("blur", () =>
  nameField.value ? sessionStorage.setItem("name", nameField.value) : ""
);

let ageField = document.getElementById("age");
ageField.addEventListener("blur", () =>
  ageField.value
    ? sessionStorage.setItem("age", JSON.stringify(parseInt(ageField.value)))
    : ""
);

let emailField = document.getElementById("email");
emailField.addEventListener("blur", () => (emailField.value ? validate() : ""));

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
function validate() {
  let email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    if (language == "english") alert(email + " is not valid");
    else if (language == "português") alert(email + " não é válido");
    else if (language == "français") alert(email + " n'est pas valide");
    else if (language == "español") alert(email + " No es válido");
  } else {
    sessionStorage.setItem("email", email);
  }
}

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  let elements = ["name", "age", "email"];
  for (let element of elements)
    document.getElementById(element).value = sessionStorage.getItem(element);
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();

  [...document.querySelectorAll(".textInputClass")]
    .slice(0, 2)
    .forEach((element) =>
      element.addEventListener("keyup", (e) =>
        e.key == "Enter"
          ? e.target.id == "name"
            ? age.focus()
            : email.focus()
          : ""
      )
    );
  email.addEventListener("keyup", (e) =>
    e.key == "Enter"
      ? (email.blur(), (window.location.href = "genderUnit.html"))
      : ""
  );
});
