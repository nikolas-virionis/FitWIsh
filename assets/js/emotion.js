function english() {
  import("./modules/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Yes";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Result";
}
function português() {
  import("./modules/language.js").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer demais baseado em emoção<h3>(Quando experenciando tristeza, felicidade, tédio, solidão, stress, decepção, preocupação, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Sim";
  document.getElementById("colorChangeIdEmoNo").value = "Não";
  document.getElementById("buttonResult").value = "Resultado";
}
function français() {
  import("./modules/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Suralimentation basée sur les émotions<h3>(Lorsque vous ressentez de la tristesse, du bonheur, de l'ennui, de la solitude, du stress, de la déception, de l'inquiétude, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Oui";
  document.getElementById("colorChangeIdEmoNo").value = "Non";
  document.getElementById("buttonResult").value = "Résultat";
}
function español() {
  import("./modules/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer en exceso basado en las emociones<h3>(Al experimentar tristeza, felicidad, aburrimiento, soledad, estrés, desilusión, preocupación, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Si";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Resultado";
}
function themeTypeLight() {
  import("./modules/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./modules/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
}

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getEmotion() == "yes")
    colorChangeIdEmoYes.style.backgroundColor = "#7395AE";
  else if (getEmotion() == "no")
    colorChangeIdEmoNo.style.backgroundColor = "#7395AE";
}

import * as getters from "./modules/fieldGetter.js";
// emotional overeating
const getEmotion = getters.getEmotion;
const emotion = (emotion) => sessionStorage.setItem("emotion", emotion);

//variable getters
const getName = getters.getName;
const getEmail = getters.getEmail;
const getAge = getters.getAge;
const getWeight = getters.getWeight;
const getHeight = getters.getHeight;
const getBodyType = getters.getBodyType;
const getCheat = getters.getCheat;
const getExercise = getters.getExercise;
const getGender = getters.getGender;
const getUnit = getters.getUnit;
const getGoal = getters.getGoal;
const getHealthy = getters.getHealthy;
const getCurrentBody = getters.getCurrentBody;
const getGoalBody = getters.getGoalBody;
const getMeals = getters.getMeals;

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (getEmotion())
    document.getElementById(
      `colorChangeIdEmo${
        getEmotion().charAt(0).toUpperCase() + getEmotion().slice(1)
      }`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      emotion(e.target.id.slice(16).toLowerCase())
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});

buttonResult.addEventListener("click", () =>
  import("./modules/checkAnswers.js").then(({ checkAllAnswers }) =>
    checkAllAnswers()
  )
);
