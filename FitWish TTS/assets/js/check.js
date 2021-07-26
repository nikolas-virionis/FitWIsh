function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
}
function portugûes() {
  import("./script").then(({ portugûes: defaultPortugûes }) =>
    defaultPortugûes()
  );
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
}
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
