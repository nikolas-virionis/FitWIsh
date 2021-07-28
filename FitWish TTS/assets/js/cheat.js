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
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
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
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
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
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
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
const getCheat = () => JSON.parse(sessionStorage.getItem("cheat"));
