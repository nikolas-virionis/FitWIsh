export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/exercise/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdXercise.innerHTML = translations.exercise;
      colorChangeIdNoneXercise.value = translations.none;
      colorChangeIdLowXercise.value = translations.low;
      colorChangeIdMidXercise.value = translations.mid;
      colorChangeIdHighXercise.value = translations.high;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
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
  setLanguage(sessionStorage.getItem("language"));
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
