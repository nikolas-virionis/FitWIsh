export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/login/languages/${language}.js`).then(
    ({ translations }) => {
      document.getElementById("name").placeholder = translations.name;
      age.placeholder = translations.age;
      email.placeholder = translations.email;
      headingTextInputIdName.innerHTML = translations.inputName;
      headingTextInputIdAge.innerHTML = translations.inputAge;
      headingTextInputIdEmail.innerHTML = translations.inputEmail;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};

export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/login/themes/${theme}.js`).then(({ colorSwitch }) => {
    for (let field of document.querySelectorAll(".headingTextInputId"))
      field.style.color = colorSwitch.field;
  });
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};

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
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          setLanguage(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )
        )
      );
  }

  if (document.querySelectorAll(".listnav"))
    document.querySelectorAll(".listnav").forEach((element) => {
      element.addEventListener("click", (e) =>
        setTheme(e.target.id.slice(0, -11))
      );
    });
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  let elements = ["name", "age", "email"];
  for (let element of elements)
    document.getElementById(element).value = sessionStorage.getItem(element);
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));

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
