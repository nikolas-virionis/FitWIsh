let contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [];
const english = () =>
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
const português = () =>
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
const français = () =>
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
const español = () =>
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
const themeTypeLight = () =>
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
const themeTypeDark = () =>
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );

window.addEventListener("load", () => {
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          setLanguage(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )
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
  setLanguage(sessionStorage.getItem("language"));
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  let resultTry = JSON.parse(sessionStorage.getItem("resultTry")) - 1;
  let lang = contentArray[resultTry].language;
  if (lang == "english")
    resultBeginning2 =
      'Welcome back <big style="font-family: Kaushan Script, cursive;">';
  else if (lang == "português")
    resultBeginning2 =
      'Bem vindo de Volta <big style="font-family: Kaushan Script, cursive;">';
  else if (lang == "français")
    resultBeginning2 =
      'Content de te revoir <big style="font-family: Kaushan Script, cursive;">';
  else if (lang == "español")
    resultBeginning2 =
      'Bienvenido de nuevo <big style="font-family: Kaushan Script, cursive;">';
  idFooter.style.display = "none";
  buttonFirst.style.display = "block";
  finalResultH3Id.style.display = "block";
  finalResultH4Id.style.display = "block";
  finalResultH3Id.innerHTML = `${resultBeginning2} ${contentArray[resultTry].inputName} </big>, ${contentArray[resultTry].bodyTypeAdvice} <br> ${contentArray[resultTry].bodyTypeAdvantageAdvice}${contentArray[resultTry].goalDistance}<br><br>${contentArray[resultTry].ageAdvice}<br><br>${contentArray[resultTry].finalIdealWeightMsg}<br><br>${contentArray[resultTry].exerciseAdvice}<br><br>${contentArray[resultTry].goalAdvice}<br><br>${contentArray[resultTry].healthyAdvice}<br><br>${contentArray[resultTry].cheatAdvice}<br><br>${contentArray[resultTry].mealsAdvice}<br><br>${contentArray[resultTry].goalAdvice2}<br><br>${contentArray[resultTry].emotionAnswer}<br><br>${contentArray[resultTry].calorieIntakeAdvice}<br><br><br>`;
  finalResultH4Id.innerHTML = `<i>${contentArray[resultTry].calorieCounterLink}<br><br>${contentArray[resultTry].caloriesLink}<br><br>${contentArray[resultTry].exerciseCaloriesLink}<br><br>${contentArray[resultTry].fitnessAppsLink}</i><br><br><br>`;
  finalResultH3Id.style.color =
    sessionStorage.getItem("theme") == "light" ? "black" : "aliceblue";
  idFooter.style.position = "relative";
  idFooter.style.marginTop = "0";
  idFooter.style.display = "block";
});
