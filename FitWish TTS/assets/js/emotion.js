function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Yes";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Result";
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer demais baseado em emoção<h3>(Quando experenciando tristeza, felicidade, tédio, solidão, stress, decepção, preocupação, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Sim";
  document.getElementById("colorChangeIdEmoNo").value = "Não";
  document.getElementById("buttonResult").value = "Resultado";
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Suralimentation basée sur les émotions<h3>(Lorsque vous ressentez de la tristesse, du bonheur, de l'ennui, de la solitude, du stress, de la déception, de l'inquiétude, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Oui";
  document.getElementById("colorChangeIdEmoNo").value = "Non";
  document.getElementById("buttonResult").value = "Résultat";
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer en exceso basado en las emociones<h3>(Al experimentar tristeza, felicidad, aburrimiento, soledad, estrés, desilusión, preocupación, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Si";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Resultado";
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
  if (getEmotion() == "yes")
    colorChangeIdEmoYes.style.backgroundColor = "#7395AE";
  else if (getEmotion() == "no")
    colorChangeIdEmoNo.style.backgroundColor = "#7395AE";
}

// emotional overeating
const getEmotion = () => sessionStorage.getItem("emotion");
const emotion = (emotion) => sessionStorage.setItem("emotion", emotion);

//variable getters
const getName = () => sessionStorage.getItem("name");
const getEmail = () => sessionStorage.getItem("email");
const getAge = () => JSON.parse(sessionStorage.getItem("age"));
const getWeight = () => JSON.parse(sessionStorage.getItem("weight"));
const getHeight = () => JSON.parse(sessionStorage.getItem("height"));
const getBodyType = () => sessionStorage.getItem("bodytype");
const getCheat = () => JSON.parse(sessionStorage.getItem("cheat"));
const getExecise = () => JSON.parse(sessionStorage.getItem("exercise"));
const getGender = () => sessionStorage.getItem("gender");
const getUnit = () => sessionStorage.getItem("unit");
const getGoal = () => sessionStorage.getItem("goal");
const getHealthy = () => JSON.parse(sessionStorage.getItem("healthy"));
const getCurrentBody = () => JSON.parse(sessionStorage.getItem("currentBody"));
const getGoalBody = () => JSON.parse(sessionStorage.getItem("goalBody"));
const getMeals = () => JSON.parse(sessionStorage.getItem("meals"));

function checkAllAnswers() {
  let email = JSON.parse(sessionStorage.getItem("emailIn")) ? getEmail() : true;
  let answers =
    getGender() &&
    getGender() &&
    getName() &&
    getAge() &&
    email &&
    getHeight() &&
    getWeight() &&
    getBodyType() &&
    getCheat() &&
    getMeals() &&
    getHealthy() &&
    getExecise() &&
    getGoal() &&
    getEmotion() &&
    getCurrentBody() &&
    getGoalBody();
  if (answers) window.location.href = "check.html";
}
