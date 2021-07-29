function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  resultBeginning2 =
    'Welcome back <big style="font-family: Kaushan Script, cursive;">';
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  resultBeginning2 =
    'Bem vindo de Volta <big style="font-family: Kaushan Script, cursive;">';
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  resultBeginning2 =
    'Content de te revoir <big style="font-family: Kaushan Script, cursive;">';
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  resultBeginning2 =
    'Bienvenido de nuevo <big style="font-family: Kaushan Script, cursive;">';
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
}
window.addEventListener("load", () => {
  window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
  let resultTry = sessionStorage.getItem("resultTry");
  idFooter.style.display = "none";
  buttonFirst.style.display = "block";
  finalResultH3Id.style.display = "block";
  finalResultH4Id.style.display = "block";
  if (resultTry == 1) {
    finalResultH3Id.innerHTML = `${resultBeginning2} ${contentArray[0].inputName} </big>, ${contentArray[0].bodyTypeAdvice} <br> ${contentArray[0].bodyTypeAdvantageAdvice}${contentArray[0].goalDistance}<br><br>${contentArray[0].ageAdvice}<br><br>${contentArray[0].finalIdealWeightMsg}<br><br>${contentArray[0].exerciseAdvice}<br><br>${contentArray[0].goalAdvice}<br><br>${contentArray[0].healthyAdvice}<br><br>${contentArray[0].cheatAdvice}<br><br>${contentArray[0].mealsAdvice}<br><br>${contentArray[0].goalAdvice2}<br><br>${contentArray[0].emotionans}<br><br>${contentArray[0].calorieIntakeAdvice}<br><br><br>`;
    finalResultH4Id.innerHTML = `<i>${contentArray[0].calorieCounterLink}<br><br>${contentArray[0].caloriesLink}<br><br>${contentArray[0].exerciseCaloriesLink}<br><br>${contentArray[0].fitnessAppsLink}</i><br><br><br>`;
  } else if (resultTry == 2) {
    finalResultH3Id.innerHTML = `${resultBeginning2} ${contentArray[1].inputName}</big>, ${contentArray[1].bodyTypeAdvice} <br> ${contentArray[1].bodyTypeAdvantageAdvice}${contentArray[1].goalDistance}<br><br>${contentArray[1].ageAdvice}<br><br>${contentArray[1].finalIdealWeightMsg}<br><br>${contentArray[1].exerciseAdvice}<br><br>${contentArray[1].goalAdvice}<br><br>${contentArray[1].healthyAdvice}<br><br>${contentArray[1].cheatAdvice}<br><br>${contentArray[1].mealsAdvice}<br><br>${contentArray[1].goalAdvice2}<br><br>${contentArray[1].emotionans}<br><br>${contentArray[1].calorieIntakeAdvice}<br><br><br>`;
    finalResultH4Id.innerHTML = `<i>${contentArray[1].calorieCounterLink}<br><br>${contentArray[1].caloriesLink}<br><br>${contentArray[1].exerciseCaloriesLink}<br><br>${contentArray[1].fitnessAppsLink}</i><br><br><br>`;
  }
  idFooter.style.position = "relative";
  idFooter.style.marginBottom = "0";
  idFooter.style.display = "block";
});
