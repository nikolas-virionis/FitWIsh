function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
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
function themeTypeDark() {}
function themeTypeLight() {}

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
