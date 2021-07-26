function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdGender").innerHTML = "Gender";
  document.getElementById("colorChangeIdMale").value = "Male";
  document.getElementById("colorChangeIdFemale").value = "Female";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unit";
  document.getElementById("colorChangeIdMetric").value = `Metric${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
}
function portugûes() {
  import("./script").then(({ portugûes: defaultPortugûes }) =>
    defaultPortugûes()
  );
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
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
