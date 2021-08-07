function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "High intensity exercise frequency:";
  document.getElementById("colorChangeIdNoneXercise").value = "None";
  document.getElementById("colorChangeIdLowXercise").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidXercise").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 or more times a week";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
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
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
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
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
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
  if (getExercise() == 1)
    colorChangeIdNoneXercise.style.backgroundColor = "#7395AE";
  else if (getExercise() == 2)
    colorChangeIdLowXercise.style.backgroundColor = "#7395AE";
  else if (getExercise() == 3)
    colorChangeIdMidXercise.style.backgroundColor = "#7395AE";
  else if (getExercise() == 4)
    colorChangeIdHighXercise.style.backgroundColor = "#7395AE";
}

const { getExercise } = await import("./modules/global/fieldGetter.js");
const setExercise = (exercise) =>
  sessionStorage.setItem("exercise", JSON.stringify(exercise));

window.addEventListener("load", () => {
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          eval(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )()
        )
      );
  }

  if (document.querySelectorAll(".listnav"))
    document.querySelectorAll(".listnav").forEach((element) => {
      element.addEventListener("click", (e) =>
        eval(
          `themeType${
            e.target.id.slice(0, -11).charAt(0).toUpperCase() +
            e.target.id.slice(1, -11)
          }`
        )()
      );
    });
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (getExercise())
    document.getElementById(
      `colorChangeId${
        getExercise() == 1
          ? "None"
          : getExercise() == 2
          ? "Low"
          : getExercise() == 3
          ? "Mid"
          : "High"
      }Xercise`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      setExercise(
        e.target.id.slice(13, -7) == "None"
          ? 1
          : e.target.id.slice(13, -7) == "Low"
          ? 2
          : e.target.id.slice(13, -7) == "Mid"
          ? 3
          : 4
      )
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});
