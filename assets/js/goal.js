export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/goal/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdGoal.innerHTML = translations.goal;
      colorChangeIdBulk.value = translations.bulk;
      colorChangeIdCut.value = translations.cut;
      colorChangeIdSurp.value = translations.surp;
      colorChangeIdMuscle.value = translations.muscle;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/goal/themes/${theme}.js`).then(({ colorSwitch }) => {
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
  if (getGoal() == "bulking")
    colorChangeIdBulk.style.backgroundColor = "#7395AE";
  else if (getGoal() == "cutting")
    colorChangeIdCut.style.backgroundColor = "#7395AE";
  else if (getGoal() == "surplus")
    colorChangeIdSurp.style.backgroundColor = "#7395AE";
  else if (getGoal() == "muscle")
    colorChangeIdMuscle.style.backgroundColor = "#7395AE";
}

const { getGoal } = await import("./modules/global/fieldGetter.js");
const goal = (goal) => sessionStorage.setItem("goal", goal);

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
  if (getGoal())
    document.getElementById(
      `colorChangeId${
        getGoal() == "bulking"
          ? "Bulk"
          : getGoal() == "cutting"
          ? "Cut"
          : getGoal() == "surplus"
          ? "Surp"
          : "Muscle"
      }`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      goal(
        e.target.id.endsWith("Bulk")
          ? "bulking"
          : e.target.id.endsWith("Cut")
          ? "cutting"
          : e.target.id.endsWith("Surp")
          ? "surplus"
          : "muscle"
      )
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});
