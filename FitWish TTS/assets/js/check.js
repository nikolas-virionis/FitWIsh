function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}

const hoverOutColorChangeFunc = (hoveredOutId) =>
  (document.getElementById(hoveredOutId).style.backgroundColor = "teal");

const setLocalData = (idParameter) => {
  idUser = idParameter;
  contentArray.push({
    idUser,
    inputName,
    emailaddrreturn,
    age,
    language,
    theme,
    genderreturn,
    resultBeginning2,
    bodyTypeAdvice,
    bodyTypeAdvantageAdvice,
    goalDistance,
    ageAdvice,
    finalIdealWeightMsg,
    exerciseAdvice,
    goalAdvice,
    healthyAdvice,
    cheatAdvice,
    mealsAdvice,
    goalAdvice2,
    emotionans,
    calorieIntakeAdvice,
    calorieCounterLink,
    caloriesLink,
    exerciseCaloriesLink,
    fitnessAppsLink,
    day,
  });
  localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
const storage = () => (tryNumber == 1 ? setLocalData(1) : setLocalData(2));
