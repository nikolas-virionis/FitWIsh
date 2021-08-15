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
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/exercise/themes/${theme}.js`).then(
    ({ colorSwitch }) => {
      for (let el of document.querySelectorAll(".headingObjInputId"))
        el.style.backgroundColor = colorSwitch.elementsColor;
    }
  );
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};

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

window.addEventListener("load", async () => {
  let { buttons } = await import("./script.js");
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
  setTheme(sessionStorage.getItem("theme"));
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
