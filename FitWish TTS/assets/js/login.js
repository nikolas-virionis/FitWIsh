function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
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
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
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
  import("./script.mjs").then(({ français: defaultFrançais }) =>
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
  import("./script.mjs").then(({ español: defaultEspañol }) =>
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
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let input of document.querySelectorAll(".textInputClass"))
    input.style.cssText = "color: #1F3B4D;";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let input of document.querySelectorAll(".textInputClass"))
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
  if (noEmailNeeded === 0) {
    if (!validateEmail(email)) {
      // if (!email) {
      //   let confirmWriteEmail;
      //   if (language == 'english') {
      //     alert("No Email Written in the Email Field");
      //     confirmWriteEmail = confirm(
      //       "Are you sure you don't want to write your email and receive a sum up later? If You Don't Just Click OK, and if you want to write your email Click Cancel!"
      //     );
      //   } else if (language == 'português') {
      //     alert("Nenhum email escrito no campo de email");
      //     confirmWriteEmail = confirm(
      //       "Tem certeza de que não deseja escrever seu e-mail e receber um resumo depois? Se você não clicar em OK e quiser escrever seu e-mail, clique em Cancelar!"
      //     );
      //   } else if (language == 'français') {
      //     alert("Aucun e-mail écrit dans le champ e-mail");
      //     confirmWriteEmail = confirm(
      //       "Êtes-vous sûr de ne pas vouloir écrire votre e-mail et recevoir un résumé plus tard? Si vous ne cliquez pas simplement sur OK, et si vous souhaitez écrire votre e-mail, cliquez sur Annuler!"
      //     );
      //   } else if (language == 'español') {
      //     alert(
      //       "No se ha escrito ningún correo electrónico en el campo de correo electrónico"
      //     );
      //     confirmWriteEmail = confirm(
      //       "¿Estás seguro de que no quieres escribir tu correo electrónico y recibir un resumen más tarde? Si no lo hace, simplemente haga clic en Aceptar, y si desea escribir su correo electrónico, haga clic en Cancelar."
      //     );
      //   }
      // if (confirmWriteEmail) {
      //   noEmailNeeded += 1;
      //   sessionStorage.setItem("emailIn", JSON.stringify(false));
      // }
      // } else {
      if (language == "english") alert(email + " is not valid");
      else if (language == "português") alert(email + " não é válido");
      else if (language == "français") alert(email + " n'est pas valide");
      else if (language == "español") alert(email + " No es válido");
      wrongEmailCount += 1;
      if (wrongEmailCount >= 2) {
        let confirmWriteEmail;
        if (language == "english")
          confirmWriteEmail = confirm(
            "Are you sure you don't want to write your email and receive a sum up later? If You Don't Just Click OK, and if you want to write your email Click Cancel!"
          );
        else if (language == "português")
          confirmWriteEmail = confirm(
            "Tem certeza de que não deseja escrever seu e-mail e receber uma quantia depois? Se você não clicar em OK e quiser escrever seu e-mail, clique em Cancelar!"
          );
        else if (language == "français")
          confirmWriteEmail = confirm(
            "Êtes-vous sûr de ne pas vouloir écrire votre e-mail et recevoir un résumé plus tard? Si vous ne cliquez pas simplement sur OK, et si vous souhaitez écrire votre e-mail, cliquez sur Annuler!"
          );
        else if (language == "español")
          confirmWriteEmail = confirm(
            "¿Estás seguro de que no quieres escribir tu correo electrónico y recibir un resumen más tarde? Si no lo hace, simplemente haga clic en Aceptar, y si desea escribir su correo electrónico, haga clic en Cancelar."
          );
        if (confirmWriteEmail) {
          noEmailNeeded += 1;
          sessionStorage.setItem("emailIn", JSON.stringify(false));
        }
      }
      // }
    } else {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("emailIn", JSON.stringify(true));
    }
  }
}

window.addEventListener("load", () => {
  window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
});
