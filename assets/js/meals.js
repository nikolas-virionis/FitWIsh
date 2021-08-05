function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdMeals").innerHTML = "Meals a day:";
  document.getElementById("colorChangeId2Meals").value = "2 meals a day";
  document.getElementById("colorChangeId3Meals").value = "3 meals a day";
  document.getElementById("colorChangeId4Meals").value = "4 meals a day";
  document.getElementById("colorChangeId5Meals").value = "5 or 6 meals a day";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
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
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Repas par jour:";
  document.getElementById("colorChangeId2Meals").value = "2 repas par jour";
  document.getElementById("colorChangeId3Meals").value = "3 repas par jour";
  document.getElementById("colorChangeId4Meals").value = "4 repas par jour";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 repas par jour";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Comidas al dia:";
  document.getElementById("colorChangeId2Meals").value = "2 comidas al dia";
  document.getElementById("colorChangeId3Meals").value = "3 comidas al dia";
  document.getElementById("colorChangeId4Meals").value = "4 comidas al dia";
  document.getElementById("colorChangeId5Meals").value = "5 o 6 comidas al dia";
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
  if (getMeals() == 1) colorChangeId2Meals.style.backgroundColor = "#7395AE";
  else if (getMeals() == 2)
    colorChangeId3Meals.style.backgroundColor = "#7395AE";
  else if (getMeals() == 3)
    colorChangeId4Meals.style.backgroundColor = "#7395AE";
  else if (getMeals() == 4)
    colorChangeId5Meals.style.backgroundColor = "#7395AE";
}

import { getMeals } from "./modules/global/fieldGetter.js";
const setMeals = (meals) =>
  sessionStorage.setItem("meals", JSON.stringify(meals));

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (getMeals())
    document.getElementById(
      `colorChangeId${
        getMeals() == 1
          ? "2"
          : getMeals() == 2
          ? "3"
          : getMeals() == 3
          ? "4"
          : "5"
      }Meals`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      setMeals(
        e.target.id.slice(13, -5) == "2"
          ? 1
          : e.target.id.slice(13, -5) == "3"
          ? 2
          : e.target.id.slice(13, -5) == "4"
          ? 3
          : 4
      )
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});
