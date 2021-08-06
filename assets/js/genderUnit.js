let metricSystem, imperialSystem;
function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdGender").innerHTML = "Gender";
  document.getElementById("colorChangeIdMale").value = "Male";
  document.getElementById("colorChangeIdFemale").value = "Female";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unit";
  document.getElementById("colorChangeIdMetric").value = `Metric`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  metricSystem = "Metric";
  imperialSystem = "Imperial";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidade";
  document.getElementById("colorChangeIdMetric").value = `Métrico`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGender").innerHTML = "Gênero";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Feminino";
  metricSystem = "Métrico";
  imperialSystem = "Imperial";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdGender").innerHTML = "Genre";
  document.getElementById("colorChangeIdMale").value = "Mâle";
  document.getElementById("colorChangeIdFemale").value = "Femelle";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unité";
  document.getElementById("colorChangeIdMetric").value = `Métrique`;
  document.getElementById("colorChangeIdImperial").value = "Impérial";
  metricSystem = "Métrique";
  imperialSystem = "Impérial";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdGender").innerHTML = "Género";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Femenino";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidad";
  document.getElementById("colorChangeIdMetric").value = `Métrico`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  metricSystem = "Métrico";
  imperialSystem = "Imperial";
}
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
}

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getGender() == "male")
    colorChangeIdMale.style.backgroundColor = "#7395AE";
  else if (getGender() == "female")
    colorChangeIdFemale.style.backgroundColor = "#7395AE";

  if (getUnit() == "metric")
    colorChangeIdMetric.style.backgroundColor = "#7395AE";
  else if (getUnit() == "imperial")
    colorChangeIdImperial.style.backgroundColor = "#7395AE";
}

//gender
const gender = (gender) => sessionStorage.setItem("gender", gender);
import { getGender } from "./modules/global/fieldGetter.js";
// unit system
const unit = (unit) => sessionStorage.setItem("unit", unit);
import { getUnit } from "./modules/global/fieldGetter.js";

//hover nano instructions on units used

const metricUnit = () => (colorChangeIdMetric.value += ` (kg / m)`);
const metricUnitCloak = () => (colorChangeIdMetric.value = metricSystem);
const imperialUnit = () => (colorChangeIdImperial.value += ` (lbs / in)`);
const imperialUnitCloak = () => (colorChangeIdImperial.value = imperialSystem);

window.addEventListener("load", () => {
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          eval(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )()
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
  if (getGender())
    document.getElementById(
      `colorChangeId${
        getGender().charAt(0).toUpperCase() + getGender().slice(1)
      }`
    ).style.backgroundColor = "#7395AE";
  if (getUnit())
    document.getElementById(
      `colorChangeId${getUnit().charAt(0).toUpperCase() + getUnit().slice(1)}`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      e.target.id.endsWith("ale") // mALE or femALE
        ? gender(e.target.id.slice(13).toLowerCase())
        : unit(e.target.id.slice(13).toLowerCase())
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
  let btns = getSiblings(document.getElementById("headingObjInputIdUnit"));
  btns.forEach((btn) => {
    btn.addEventListener("mouseover", (e) => {
      eval(`${e.target.id.slice(13).toLowerCase()}Unit`)();
    });
    btn.addEventListener("mouseout", (e) =>
      eval(`${e.target.id.slice(13).toLowerCase()}UnitCloak`)()
    );
  });
});
