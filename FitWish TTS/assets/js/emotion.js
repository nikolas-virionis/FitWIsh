function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Yes";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Result";
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer demais baseado em emoção<h3>(Quando experenciando tristeza, felicidade, tédio, solidão, stress, decepção, preocupação, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Sim";
  document.getElementById("colorChangeIdEmoNo").value = "Não";
  document.getElementById("buttonResult").value = "Resultado";
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Suralimentation basée sur les émotions<h3>(Lorsque vous ressentez de la tristesse, du bonheur, de l'ennui, de la solitude, du stress, de la déception, de l'inquiétude, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Oui";
  document.getElementById("colorChangeIdEmoNo").value = "Non";
  document.getElementById("buttonResult").value = "Résultat";
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer en exceso basado en las emociones<h3>(Al experimentar tristeza, felicidad, aburrimiento, soledad, estrés, desilusión, preocupación, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Si";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Resultado";
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

buttonResult.addEventListener("click", () => checkAllAnswers());

function checkAllAnswers() {
  let answers =
    getGender() &&
    getUnit() &&
    getName() &&
    getAge() &&
    getEmail() &&
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
  if (!getName()) {
    if (language == "english")
      alert(
        "Name not informed, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Nome não informado, é obrigatório para a melhor vivência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Nom non renseigné, il est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Nombre no informado, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "login.html";
  } else if (!getAge()) {
    if (language == "english")
      alert(
        "Age not informed, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Idade não informada, é obrigatória para a melhor vivência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Âge non renseigné, il est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Edad no informada, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "login.html";
  } else if (!getEmail()) {
    if (language == "english")
      alert(
        "Email not informed, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Email não informado, é obrigatório para a melhor vivência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Email non renseigné, il est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Correo electrónico no informado, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "login.html";
  } else if (!getGender()) {
    if (language == "english")
      alert(
        "Gender option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de gênero não marcada, é obrigatório para a melhor experiência de nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option de genre non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "La opción de género no está marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "genderUnit.html";
  } else if (!getUnit()) {
    if (language == "english")
      alert(
        "Unit option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de unidade não marcada, é obrigatória para a melhor experiência de nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option d'unité non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Opción de unidad no marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "genderUnit.html";
  } else if (!getHeight()) {
    if (language == "english")
      alert(
        "Height not informed, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Altura não informada, é obrigatório para a melhor experiência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Hauteur non renseignée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Altura no informada, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "data.html";
  } else if (!getWeight()) {
    if (language == "english")
      alert(
        "Weight not informed, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Peso não informado, é obrigatório para a melhor vivência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Poids non renseigné, il est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Peso no informado, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "data.html";
  } else if (!getBodyType()) {
    if (language == "english")
      alert(
        "Body type option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de tipo de corpo não marcada, é obrigatório para a melhor experiência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option de type de corps non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "La opción de tipo de cuerpo no está marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "bodyType.html";
  } else if (!getMeals()) {
    if (language == "english")
      alert(
        "Meals per day option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de refeições diárias não marcada, é obrigatória para a melhor experiência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option repas par jour non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Opción de comidas por día no marcada, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "meals.html";
  } else if (!getCheat()) {
    if (language == "english")
      alert(
        "Cheat meal option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "opção de refeição pouco saudável não marcada, é obrigatória para a melhor experiência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "option de repas malsain non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Opción de comida poco saludable no marcada, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "cheat.html";
  } else if (!getHealthy()) {
    if (language == "english")
      alert(
        "Healthy meal option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de refeição saudável não marcada, é obrigatória para a melhor experiência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option repas sain non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Opción de comida saludable no marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "healthy.html";
  } else if (!getExecise()) {
    if (language == "english")
      alert(
        "Exercising option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de exercício não marcada, é obrigatório para a melhor experiência do nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option d'exercice non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Ejercicio de opción no marcada, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "exercise.html";
  } else if (!getGoal()) {
    if (language == "english")
      alert(
        "Goal option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de meta não marcada, é obrigatória para a melhor experiência de nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option d'objectif non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "La opción de objetivo no está marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "goal.html";
  } else if (!getEmotion()) {
    if (language == "english")
      alert(
        "Emotional overeating option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de comer excessivo emocional não marcada, é obrigatória para a melhor experiência de nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option de suralimentation émotionnelle non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "La opción de comer en exceso emocional no está marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "emotion.html";
  } else if (!getCurrentBody()) {
    if (language == "english")
      alert(
        "Current body option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de corpo atual não marcada, é obrigatório para a melhor experiência de nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option de corps actuelle non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "Opción corporal actual no marcada, es obligatorio para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "image.html";
  } else if (!getGoalBody()) {
    if (language == "english")
      alert(
        "Goal body option not checked, it is mandatory for the best experience of our diagnosis, although all data is safe and private"
      );
    if (language == "português")
      alert(
        "Opção de corpo da meta não marcada, é obrigatória para a melhor experiência de nosso diagnóstico, embora todos os dados sejam seguros e privados"
      );
    if (language == "français")
      alert(
        "Option de corps d'objectif non cochée, elle est obligatoire pour la meilleure expérience de notre diagnostic, bien que toutes les données soient sécurisées et privées"
      );
    if (language == "español")
      alert(
        "La opción del cuerpo del objetivo no está marcada, es obligatoria para la mejor experiencia de nuestro diagnóstico, aunque todos los datos son seguros y privados."
      );
    window.location.href = "image.html";
  }
}
