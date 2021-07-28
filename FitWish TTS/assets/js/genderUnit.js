function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
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
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
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
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
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
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
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
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
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
const getGender = () => sessionStorage.getItem("gender");
// unit system
const unit = (unit) => sessionStorage.setItem("unit", unit);
const getUnit = () => sessionStorage.getItem("unit");

//hover nano instructions on units used
const metricUnit = () => (colorChangeIdMetric.value += ` (kg / m)`);
const metricUnitCloak = () => (colorChangeIdMetric.value = metricSystem);
const imperialUnit = () => (colorChangeIdImperial.value += ` (lbs / in)`);
const imperialUnitCloak = () => (colorChangeIdImperial.value = imperialSystem);
