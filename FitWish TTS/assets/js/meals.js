function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdMeals").innerHTML = "Meals a day:";
  document.getElementById("colorChangeId2Meals").value = "2 meals a day";
  document.getElementById("colorChangeId3Meals").value = "3 meals a day";
  document.getElementById("colorChangeId4Meals").value = "4 meals a day";
  document.getElementById("colorChangeId5Meals").value = "5 or 6 meals a day";
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Refeições por dias:";
  document.getElementById("colorChangeId2Meals").value = "2 refeições por dia";
  document.getElementById("colorChangeId3Meals").value = "3 refeições por dia";
  document.getElementById("colorChangeId4Meals").value = "4 refeições por dia";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 refeições por dia";
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Repas par jour:";
  document.getElementById("colorChangeId2Meals").value = "2 repas par jour";
  document.getElementById("colorChangeId3Meals").value = "3 repas par jour";
  document.getElementById("colorChangeId4Meals").value = "4 repas par jour";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 repas par jour";
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Comidas al dia:";
  document.getElementById("colorChangeId2Meals").value = "2 comidas al dia";
  document.getElementById("colorChangeId3Meals").value = "3 comidas al dia";
  document.getElementById("colorChangeId4Meals").value = "4 comidas al dia";
  document.getElementById("colorChangeId5Meals").value = "5 o 6 comidas al dia";
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
  if (meals == 1) colorChangeId2Meals.style.backgroundColor = "#7395AE";
  else if (meals == 2) colorChangeId3Meals.style.backgroundColor = "#7395AE";
  else if (meals == 3) colorChangeId4Meals.style.backgroundColor = "#7395AE";
  else if (meals == 4) colorChangeId5Meals.style.backgroundColor = "#7395AE";
}

const setMeals = (food) => (meals = food);
