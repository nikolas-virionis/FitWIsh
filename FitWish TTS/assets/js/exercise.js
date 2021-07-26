function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "High intensity exercise frequency:";
  document.getElementById("colorChangeIdNoneXercise").value = "None";
  document.getElementById("colorChangeIdLowXercise").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidXercise").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 or more times a week";
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

const setExecise = (workout) => (exercise = workout);
