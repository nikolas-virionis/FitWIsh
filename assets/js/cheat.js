function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Cheat meals days frequency:";
  document.getElementById("colorChangeIdNoneCheat").value = "None";
  document.getElementById("colorChangeIdLowCheat").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidCheat").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 or more times a week";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Frequência de dias com comidas não saudáveis:";
  document.getElementById("colorChangeIdNoneCheat").value = "Nenhuma";
  document.getElementById("colorChangeIdLowCheat").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidCheat").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 ou mais vezes por semana";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Fréquence des jours de repas non sains:";
  document.getElementById("colorChangeIdNoneCheat").value = "Aucun";
  document.getElementById("colorChangeIdLowCheat").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidCheat").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 fois ou plus par semaine";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Frecuencia de días de comidas no saludables:";
  document.getElementById("colorChangeIdNoneCheat").value = "Ninguno";
  document.getElementById("colorChangeIdLowCheat").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidCheat").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 o más veces por semana";
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

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (getCheat())
    document.getElementById(
      `colorChangeId${
        getCheat() == 1
          ? "None"
          : getCheat() == 2
          ? "Low"
          : getCheat() == 3
          ? "Mid"
          : "High"
      }Cheat`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
});

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getCheat() == 1) colorChangeIdNoneCheat.style.backgroundColor = "#7395AE";
  else if (getCheat() == 2)
    colorChangeIdLowCheat.style.backgroundColor = "#7395AE";
  else if (getCheat() == 3)
    colorChangeIdMidCheat.style.backgroundColor = "#7395AE";
  else if (getCheat() == 4)
    colorChangeIdHighCheat.style.backgroundColor = "#7395AE";
}

const setCheat = (cheat) =>
  sessionStorage.setItem("cheat", JSON.stringify(cheat));
import { getCheat } from "./modules/global/fieldGetter.js";

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    setCheat(
      e.target.id.slice(13, -5) == "None"
        ? 1
        : e.target.id.slice(13, -5) == "Low"
        ? 2
        : e.target.id.slice(13, -5) == "Mid"
        ? 3
        : 4
    )
  );
  button.addEventListener("mouseout", (e) =>
    hoverOutColorChangeFunc(e.target.id)
  );
});
