function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdGender").innerHTML = "Gender";
  document.getElementById("colorChangeIdMale").value = "Male";
  document.getElementById("colorChangeIdFemale").value = "Female";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unit";
  document.getElementById("colorChangeIdMetric").value = `Metric${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidade";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrico${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGender").innerHTML = "Gênero";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Feminino";
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  document.getElementById("headingObjInputIdGender").innerHTML = "Genre";
  document.getElementById("colorChangeIdMale").value = "Mâle";
  document.getElementById("colorChangeIdFemale").value = "Femelle";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unité";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrique${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Impérial";
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  document.getElementById("headingObjInputIdGender").innerHTML = "Género";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Femenino";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidad";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrico${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
  for (let el of document.querySelector(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
  for (let el of document.querySelector(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
}

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (gender == "male") colorChangeIdMale.style.backgroundColor = "#7395AE";
  else if (gender == "female")
    colorChangeIdFemale.style.backgroundColor = "#7395AE";

  if (unit == "metric" && metricVerify >= 2)
    colorChangeIdMetric.style.backgroundColor = "#7395AE";
  else if (unit == "imperial")
    colorChangeIdImperial.style.backgroundColor = "#7395AE";
}

//2 functions about gender
function male() {
  gender = "male";
}
function female() {
  gender = "female";
}
// unit system
function unitSystem(unitSys) {
  unit = unitSys;
  if (unit == "metric") {
    metricDataInputId.style.display = "block";
    imperialDataInputId.style.display = "none";
    metricVerify += 1;
  } else if (unit == "imperial") {
    metricDataInputId.style.display = "none";
    imperialDataInputId.style.display = "block";
  }
}
const metricUnit = () => (colorChangeIdMetric.value += ` (kg / m)`);
function metricUnitCloak() {
  if ((unit == "metric" && metricVerify >= 2) || unit == "imperial")
    colorChangeIdMetric.value = `${metricNoDefault}`;
  else colorChangeIdMetric.value = `${metricDefault}`;
}
const imperialUnit = () => (colorChangeIdImperial.value += ` (lbs / in)`);
const imperialUnitCloak = () =>
  (colorChangeIdImperial.value = ` ${imperialDefault}`);
