function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Cheat meals days frequency:";
  document.getElementById("colorChangeIdNoneCheat").value = "None";
  document.getElementById("colorChangeIdLowCheat").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidCheat").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighCheat").value =
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

const setCheat = (food) => (cheat = food);
