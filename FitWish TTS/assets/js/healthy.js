function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Good and healthy meal days frequency:";
  document.getElementById("colorChangeIdNoneHealthy").value = "None";
  document.getElementById("colorChangeIdLowHealthy").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidHealthy").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 or more times a week";
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Frequencia de dias com alimentação saudável:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Nenhuma";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 ou mais vezes por semana";
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Fréquence des jours de repas bons et sains:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Aucun";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 fois ou plus par semaine";
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Frecuencia de días de comidas buenas y saludables:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Ninguno";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 o más veces por semana";
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
}

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getHealthy() == 1)
    colorChangeIdNoneHealthy.style.backgroundColor = "#7395AE";
  else if (getHealthy() == 2)
    colorChangeIdLowHealthy.style.backgroundColor = "#7395AE";
  else if (getHealthy() == 3)
    colorChangeIdMidHealthy.style.backgroundColor = "#7395AE";
  else if (getHealthy() == 4)
    colorChangeIdHighHealthy.style.backgroundColor = "#7395AE";
}

const getHealthy = () => JSON.parse(sessionStorage.getItem("healthy"));
const setHealthy = (healthy) =>
  sessionStorage.setItem("healthy", JSON.stringify(healthy));

window.addEventListener("load", () => {
  window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
});
