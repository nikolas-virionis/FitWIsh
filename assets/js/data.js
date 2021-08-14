const { getUnit } = await import("./modules/global/fieldGetter.js");
export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/data/languages/${language}.js`).then(
    ({ translations }) => {
      weightMetric.placeholder = translations.weightMetricPlaceholder;
      heightMetric.placeholder = translations.heightMetricPlaceholder;
      weightImperial.placeholder = translations.weightImperialPlaceholder;
      heightImperial.placeholder = translations.heightImperialPlaceholder;
      headingTextInputIdWeightMetric.innerHTML =
        headingTextInputIdWeightImperial.innerHTML = translations.weight;
      headingTextInputIdHeightMetric.innerHTML =
        headingTextInputIdHeightImperial.innerHTML = translations.height;
      if (getUnit() == "metric") {
        weightMetric.title = labels[0].title = translations.weightMetric;
        heightMetric.title = labels[1].title = translations.heightMetric;
      } else {
        weightImperial.title = labels[0].title = translations.weightImperial;
        heightImperial.title = labels[1].title = translations.heightImperial;
      }
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let field of document.querySelectorAll(".headingTextInputId"))
    field.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let field of document.querySelectorAll(".headingTextInputId"))
    field.style.color = "#DDD";
}
let labels = document.querySelectorAll(".label");
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
        eval(
          `themeType${
            e.target.id.slice(0, -11).charAt(0).toUpperCase() +
            e.target.id.slice(1, -11)
          }`
        )()
      );
    });
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
  setLanguage(sessionStorage.getItem("language"));
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
