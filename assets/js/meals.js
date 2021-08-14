export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/meals/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdMeals.innerHTML = translations.meals;
      colorChangeId2Meals.value = translations[2];
      colorChangeId3Meals.value = translations[3];
      colorChangeId4Meals.value = translations[4];
      colorChangeId5Meals.value = translations[5];
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/meals/themes/${theme}.js`).then(({ colorSwitch }) => {
    for (let el of document.querySelectorAll(".headingObjInputId"))
      el.style.backgroundColor = colorSwitch.elementsColor;
  });
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getMeals() == 1) colorChangeId2Meals.style.backgroundColor = "#7395AE";
  else if (getMeals() == 2)
    colorChangeId3Meals.style.backgroundColor = "#7395AE";
  else if (getMeals() == 3)
    colorChangeId4Meals.style.backgroundColor = "#7395AE";
  else if (getMeals() == 4)
    colorChangeId5Meals.style.backgroundColor = "#7395AE";
}
const { getMeals } = await import("./modules/global/fieldGetter.js");
const setMeals = (meals) =>
  sessionStorage.setItem("meals", JSON.stringify(meals));

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
        setTheme(e.target.id.slice(0, -11))
      );
    });
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (getMeals())
    document.getElementById(
      `colorChangeId${
        getMeals() == 1
          ? "2"
          : getMeals() == 2
          ? "3"
          : getMeals() == 3
          ? "4"
          : "5"
      }Meals`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      setMeals(
        e.target.id.slice(13, -5) == "2"
          ? 1
          : e.target.id.slice(13, -5) == "3"
          ? 2
          : e.target.id.slice(13, -5) == "4"
          ? 3
          : 4
      )
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc?.(e.target.id)
    );
  });
});
