function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdMeals").innerHTML = "Meals a day:";
  document.getElementById("colorChangeId2Meals").value = "2 meals a day";
  document.getElementById("colorChangeId3Meals").value = "3 meals a day";
  document.getElementById("colorChangeId4Meals").value = "4 meals a day";
  document.getElementById("colorChangeId5Meals").value = "5 or 6 meals a day";
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

const setMeals = (food) => (meals = food);
