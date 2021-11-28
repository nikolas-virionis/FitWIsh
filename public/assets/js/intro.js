export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/intro/languages/${language}.js`).then(
    ({ translations }) => {
      let introTxt = document.querySelectorAll(".planTxt");
      for (let element of introTxt)
        element.style.fontSize = translations.planTxtFontSize;
      planId.style.marginLeft = translations.planMarginLeft;
      planId.style.marginRight = translations.planMarginRight;
      planId.innerHTML = translations.plan;
      checkImgId.style.marginLeft = translations.checkImgMarginLeft;
      idBadHabits.innerHTML = translations.BadHabits;
      idPlanMsg.innerHTML = translations.PlanMsg;
      idGoodHabits.innerHTML = translations.GoodHabits;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/intro/themes/${theme}.js`).then(({ colorSwitch }) => {
    planId.style.color = idPlanMsg.style.color = colorSwitch.plan;
    idBadHabits.style.color = colorSwitch.bad;
    idGoodHabits.style.color = colorSwitch.good;
  });
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};

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
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  if (!localStorage.getItem("contentArray")) buttonFirst.style.display = "none";
});
