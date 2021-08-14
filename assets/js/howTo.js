export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/howTo/languages/${language}.js`).then(
    ({ translations }) => {
      idHowToH2.innerHTML = translations.h2;
      idHowToH3.innerHTML = translations.h3;
      idHowToTxt1.innerHTML = translations.txt1;
      idHowToTxt2.innerHTML = translations.txt2;
      idHowToHeading.innerHTML = translations.heading;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/howTo/themes/${theme}.js`).then(
    ({ colorSwitch }) =>
      (idHowToHeading.style.color =
        idHowToH2.style.color =
        idHowToH3.style.color =
        idHowToTxt1.style.color =
        idHowToTxt2.style.color =
          colorSwitch.colorPallete)
  );
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
