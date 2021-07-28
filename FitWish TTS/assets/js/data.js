function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  weightMetric.placeholder = "Example: 80.5";
  heightMetric.placeholder = "Example: 1.85";
  weightImperial.placeholder = "Example: 200.5";
  heightImperial.placeholder = "Example: 70";
  headingTextInputIdWeightMetric.innerHTML = "Weight";
  headingTextInputIdHeightMetric.innerHTML = "Height";
  headingTextInputIdWeightImperial.innerHTML = "Weight";
  headingTextInputIdHeightImperial.innerHTML = "Height";
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  weightMetric.placeholder = "Exemplo: 80.5";
  heightMetric.placeholder = "Exemplo: 1.85";
  weightImperial.placeholder = "Exemplo: 200.5";
  heightImperial.placeholder = "Exemplo: 70";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  weightMetric.placeholder = "Exemple: 80.5";
  heightMetric.placeholder = "Exemple: 1.85";
  weightImperial.placeholder = "Exemple: 200.5";
  heightImperial.placeholder = "Exemple: 70";
  headingTextInputIdWeightMetric.innerHTML = "Poids";
  headingTextInputIdHeightMetric.innerHTML = "Hauteur";
  headingTextInputIdWeightImperial.innerHTML = "Poids";
  headingTextInputIdHeightImperial.innerHTML = "Hauteur";
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  weightMetric.placeholder = "Ejemplo: 80.5";
  heightMetric.placeholder = "Ejemplo: 1.85";
  weightImperial.placeholder = "Ejemplo: 200.5";
  heightImperial.placeholder = "Ejemplo: 70";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
  for (let field of document.querySelectorAll(".textInputClass"))
    field.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
  for (let field of document.querySelectorAll(".textInputClass"))
    field.style.color = "#DDD";
}
window.addEventListener("load", () => {
  if (!sessionStorage.getItem("unit")) {
    if (language == "english")
      alert(
        "In order to access the height and weight insertion page, choosing an unit of choice is necessary"
      );
    else if (language == "português")
      alert(
        "Para acessar a página de inserção de altura e peso, é necessário escolher uma unidade de escolha"
      );
    else if (language == "français")
      alert(
        "Afin d'accéder à la page d'insertion de la taille et du poids, le choix d'une unité de choix est nécessaire"
      );
    else if (language == "español")
      alert(
        "Para acceder a la página de inserción de altura y peso, es necesario elegir una unidad de elección"
      );
    window.location.href = "genderUnit.html";
  } else {
    if (sessionStorage.getItem("unit") == "metric") {
      metricDataInputId.style.display = "block";
      imperialDataInputId.style.display = "none";
    } else {
      metricDataInputId.style.display = "none";
      imperialDataInputId.style.display = "block";
    }
  }
});

let heightField = document.getElementById(
  `height${
    sessionStorage.getItem("unit").charAt(0).toUpperCase() +
    sessionStorage.getItem("unit").slice(1)
  }`
);
heightField.addEventListener("blur", () =>
  heightField.value
    ? sessionStorage.setItem(
        "height",
        JSON.stringify(
          parseFloat(
            sessionStorage.getItem("unit") == "metric"
              ? heightField.value
              : (heightField.value * 0.0254).toFixed(2)
          )
        )
      )
    : ""
);

let weightField = document.getElementById(
  `weight${
    sessionStorage.getItem("unit").charAt(0).toUpperCase() +
    sessionStorage.getItem("unit").slice(1)
  }`
);
weightField.addEventListener("blur", () =>
  weightField.value
    ? sessionStorage.setItem(
        "weight",
        JSON.stringify(
          parseFloat(
            sessionStorage.getItem("unit") == "metric"
              ? weightField.value
              : (weightField.value / 2.205).toFixed(2)
          )
        )
      )
    : ""
);
