export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/about/languages/${language}.js`).then(
    ({ translations }) => {
      idAboutTxtLeft.style.fontSize = translations.txtLeftFontSize;
      idAboutH2.style.marginLeft = translations.h2MarginLeft;
      idAboutH2.innerHTML = translations.h2;
      idAboutTxtLeft.innerHTML = translations.txtLeft;
      idAboutHeading.innerHTML = translations.heading;
      idAboutTxtRight.innerHTML = translations.txtRight;
    }
  );
};

const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/about/themes/${theme}.js`).then(
    ({ colorSwitch }) =>
      (idAboutHeading.style.color =
        idAboutH2.style.color =
        idAboutTxtRight.style.color =
        idAboutTxtLeft.style.color =
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
