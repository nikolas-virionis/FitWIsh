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
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Frequência de exercício de alta intensidade:";
  document.getElementById("colorChangeIdNoneXercise").value = "Nenhuma";
  document.getElementById("colorChangeIdLowXercise").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidXercise").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 ou mais vezes por semana";
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Fréquence d'exercice à haute intensité:";
  document.getElementById("colorChangeIdNoneXercise").value = "Aucun";
  document.getElementById("colorChangeIdLowXercise").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidXercise").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 fois ou plus par semaine";
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Frecuencia de ejercicio de alta intensidad:";
  document.getElementById("colorChangeIdNoneXercise").value = "Ninguno";
  document.getElementById("colorChangeIdLowXercise").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidXercise").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighXercise").value =
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
  if (getExecise() == 1)
    colorChangeIdNoneXercise.style.backgroundColor = "#7395AE";
  else if (getExecise() == 2)
    colorChangeIdLowXercise.style.backgroundColor = "#7395AE";
  else if (getExecise() == 3)
    colorChangeIdMidXercise.style.backgroundColor = "#7395AE";
  else if (getExecise() == 4)
    colorChangeIdHighXercise.style.backgroundColor = "#7395AE";
}

const getExecise = () => JSON.parse(sessionStorage.getItem("exercise"));
const setExecise = (exercise) =>
  sessionStorage.setItem("exercise", JSON.stringify(exercise));
