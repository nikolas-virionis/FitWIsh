export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/contact/languages/${language}.js`).then(
    ({ translations }) => {
      idContactH2.style.marginLeft = translations.h2MarginLeft;
      idContactH2.innerHTML = translations.h2;
      idContactIntro.innerHTML = translations.intro;
      idContactHeading.innerHTML = translations.heading;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/contact/themes/${theme}.js`).then(
    ({ colorSwitch }) =>
      (idContactHeading.style.color =
        idContactLinkedIn.style.color =
        idContactGmail.style.color =
        idContactH2.style.color =
        idContactIntro.style.color =
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
