import { getUnit } from "./modules/fieldGetter.js";
function english() {
  import("./modules/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  weightMetric.placeholder = "Example: 80.5";
  heightMetric.placeholder = "Example: 1.85";
  weightImperial.placeholder = "Example: 200.5";
  heightImperial.placeholder = "Example: 70";
  headingTextInputIdWeightMetric.innerHTML =
    headingTextInputIdWeightImperial.innerHTML = "Weight";
  headingTextInputIdHeightMetric.innerHTML =
    headingTextInputIdHeightImperial.innerHTML = "Height";
  if (getUnit() == "metric") {
    weightMetric.title = labels[0].title = "Unit: kilograms (kg)";
    heightMetric.title = labels[1].title = "Unit: meters (m)";
  } else {
    weightMetric.title = labels[0].title = "Unit: pounds (lbs)";
    heightMetric.title = labels[1].title = "Unit: inches (in)";
  }
}
function português() {
  import("./modules/language.js").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  weightMetric.placeholder = "Exemplo: 80.5";
  heightMetric.placeholder = "Exemplo: 1.85";
  weightImperial.placeholder = "Exemplo: 200.5";
  heightImperial.placeholder = "Exemplo: 70";
  headingTextInputIdWeightMetric.innerHTML =
    headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML =
    headingTextInputIdHeightImperial.innerHTML = "Altura";
  if (getUnit() == "metric") {
    weightMetric.title = labels[0].title = "Unidade: kilogramas (kg)";
    heightMetric.title = labels[1].title = "Unidade: metros (m)";
  } else {
    weightMetric.title = labels[0].title = "Unidade: libras (lbs)";
    heightMetric.title = labels[1].title = "Unidade: polegadas (in)";
  }
}
function français() {
  import("./modules/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  weightMetric.placeholder = "Exemple: 80.5";
  heightMetric.placeholder = "Exemple: 1.85";
  weightImperial.placeholder = "Exemple: 200.5";
  heightImperial.placeholder = "Exemple: 70";
  headingTextInputIdWeightMetric.innerHTML =
    headingTextInputIdWeightImperial.innerHTML = "Poids";
  headingTextInputIdHeightMetric.innerHTML =
    headingTextInputIdHeightImperial.innerHTML = "Hauteur";
  if (getUnit() == "metric") {
    weightMetric.title = labels[0].title = "Unité: kilogrammes (kg)";
    heightMetric.title = labels[1].title = "Unité: mètres (m)";
  } else {
    weightMetric.title = labels[0].title = "Unité: livres sterling (lbs)";
    heightMetric.title = labels[1].title = "Unité: pouces (in)";
  }
}
function español() {
  import("./modules/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  weightMetric.placeholder = "Ejemplo: 80.5";
  heightMetric.placeholder = "Ejemplo: 1.85";
  weightImperial.placeholder = "Ejemplo: 200.5";
  heightImperial.placeholder = "Ejemplo: 70";
  headingTextInputIdWeightMetric.innerHTML =
    headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML =
    headingTextInputIdHeightImperial.innerHTML = "Altura";
  if (getUnit() == "metric") {
    weightMetric.title = labels[0].title = "Unidad: kilogramos (kg)";
    heightMetric.title = labels[1].title = "Unidad: metros (m)";
  } else {
    weightMetric.title = labels[0].title = "Unidad: libras (lbs)";
    heightMetric.title = labels[1].title = "Unidad: pulgadas (in)";
  }
}
function themeTypeLight() {
  import("./modules/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let field of document.querySelectorAll(".headingTextInputId"))
    field.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let field of document.querySelectorAll(".headingTextInputId"))
    field.style.color = "#DDD";
}
let labels = document.querySelectorAll(".label");
window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
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
  let unit = getUnit().charAt(0).toUpperCase() + getUnit().slice(1) ?? "Metric";
  let elements = ["height", "weight"];
  elements.forEach(
    (element) =>
      (document.getElementById(element + unit).value = JSON.parse(
        sessionStorage.getItem(element)
      ))
  );
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  document
    .getElementById(`weight${unit}`)
    .addEventListener("keyup", (e) =>
      e.key == "Enter" ? document.getElementById(`height${unit}`).focus() : ""
    );

  document
    .getElementById(`height${unit}`)
    .addEventListener("keyup", (e) =>
      e.key == "Enter"
        ? (document.getElementById(`height${unit}`).blur(),
          (window.location.href = "goal.html"))
        : ""
    );
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
